# MDX TO HTML

Author(s): Tomás Cuevas

Status: Borrador

Ultima actualización: 2023-01-20

## Contenido

- [Objetivo](#objetivo)
- [Metas](#metas)
- [Background](#background)
- [Overview](#overview)
- [Diseño detallado](#diseño-detallado)
  - [Obtener todos los archivos markdown](#obtener-todos-los-archivos-markdown)
  - [Obtener archivo markdown por slug (metadata y contenido)](#obtener-archivo-markdown-por-slug-metadata-y-contenido)
  - [Renderizar contenido en componente de React](#renderizar-contenido-en-componente-de-react)

## Objetivo

Transformar un documento escrito en markdown a html. Es una aplicacion de NextJs.

## Metas

- Obtener los metadatos de un documento markdown.
- Obtener el contenido de un documento markdown.
- Obtener un documento por su slug.
- Agregar resaltado de sintaxis.
- Renderizar contenido en un componente de React.

## Background

Quiero realizar un blog personal, donde pueda escribir mis propios articulos. Como tecnologia, escogi ReactJs con NextJs para poder generar los articulos de forma estatica.

Los articulos los escribo en documentos markdown **(.mdx)**. Los cuales debo transformar a **HTML** para generar el estatico.

## Overview

Necesito librerias que conviertan el markdown en html, estas deben poder extraer la metadata, el contenido del archivo y el slug, a la vez, dar un resaltado en la sintaxis de codigo.

Las tres librerias que permitiran hacer esto son:

- gray-matter
- next-mdx-remote
- rehype-highlight

`grey-matter` nos permite obtener la metadata y el contenido de un archivo markdown.

`next-mdx-remote` nos permite dar formato al contenido del markdown que obtenemos utilizando **grey-matter**

`rehype-highlight` es un plugin para **next-mdx-remote** que nos permite agregar resaltado de sintaxis.

## Diseño detallado

### Obtener todos los archivos markdown

Para ello, tendremos una funcion llamada **getArticlesFiles**, que hara uso de las librerias propias de node **fs** y **path**, para leer todos los archivos **.mdx** dentro de la carpeta _/content/articles_.

```ts
import fs from "fs";
import path from "path";

const root = process.cwd();

export const getArticlesFiles = () => {
  return fs.readdirSync(path.join(root, "content", "articles"));
};
```

### Obtener archivo markdown por slug (metadata y contenido)

Tendremos una funcion llamada **getFileBySlug**, que hara uso de las librerias propias de node **fs** y **path**. Esta funcion, recibira un slug por parametro que servira para buscar el archivo **.mdx** dentro de la carpeta _/content/articles_.

Una vez tengamos el archivo, utilizaremos la libreria **gray-matter** que le pasaremos como argumento el archivo **.mdx** obtenido previamente. Este, nos retornara la metadata del archivo y el contenido.

Tras todo lo anterior, tendriamos la metadata y el contenido del archivo **.mdx**, ahora, nos faltaria convertir el contenido markdown en html. Para ello, utilizaremos la libreria **next-mdx-remote** del cual ocuparemos el metodo **serialize**, el cual recibe como parametro el contenido markdown y un objeto de configuraciones opcional.

Ya tendriamos la metadata y el contenido transformado a html. Ahora el problema es, que el metodo **serialize** por defecto, no agrega resaltado a la sintaxis de codigo. Por lo cual, necesitaremos utilizar la liberia **rehype-hightlight**, que es un plugin que podremos agregar en el objeto de confiraciones del metodo **serialize**, dentro de la propiedad **mdxOptions: rehypePlugins**.

Por ultimo, debemos retornar el contenido html y las metadatas del archivo.

```ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

const root = process.cwd();

export const getFileBySlug = async (slug: string) => {
  const mdxFile = fs.readFileSync(
    path.join(root, "content", "articles", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxFile);

  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};
```

### Renderizar contenido en componente de React

Para renderizar el contenido retornado por la funcion **getFileBySlug** utilizaremos la libreria **next-mdx-remote** de la cual, obtendremos un componente llamado **MDXRemote**, al cual se le pasa como argumento el contenido que se quiere renderizar.

Tras esto, necesitaremos importar un archivo **.css** para darle estilos a la sintaxis resaltada.

```ts
import "highlight.js/styles/atom-one-dark.css";
```

```ts
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

// styles
import "highlight.js/styles/atom-one-dark.css";

interface Props {
  source: any;
  metadata: any;
}

const ArticlePage: NextPage<Props> = ({ metadata, source }) => {
  return <MDXRemote {...source} />;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const posts = await getArticlesFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { metadata, source } = await getFileBySlug((params as any).slug);

  return {
    props: {
      source,
      metadata,
    },
  };
};

export default ArticlePage;
```
