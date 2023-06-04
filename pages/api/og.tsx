import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const loadMerriweather = async () => {
  return fetch(
    new URL("../../public/fonts/Merriweather-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
};

const loadInter = async () => {
  return fetch(
    new URL("../../public/fonts/Inter-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
};

const loadRoboto = async () => {
  return fetch(
    new URL("../../public/fonts/Roboto-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
};

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const category = searchParams.get("category");
  const tags = searchParams.get("tags")?.split(",");
  const date = searchParams.get("date");
  const readingTime = searchParams.get("readingTime");

  const merriweather = await loadMerriweather();
  const inter = await loadInter();
  const roboto = await loadRoboto();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginBottom: "40px",
          padding: "10px 20px",
          width: "100%",
          height: "100%",
          backgroundColor: "#07060e",
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/wb.svg`}
          alt="whiteblack logo"
          style={{
            width: 82,
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        />
        <img
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
            zIndex: "-10",
            height: "267px",
            opacity: 0.2,
          }}
          src={`${process.env.NEXT_PUBLIC_URL}/images/categories/${category}.svg`}
          alt="category logo"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontSize: 40,
                color: "white",
                fontFamily: "Merriweather",
              }}
            >
              {title}
            </h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: 2,
              }}
            >
              {tags?.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "#d1d5db",
                    fontFamily: "Inter",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "6px",
                marginTop: 8,
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#9f53fd",
                    fontFamily: "Merriweather",
                  }}
                >
                  {author}
                </h4>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  /
                </span>
                <time
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    color: "white",
                  }}
                >
                  {new Date(date!).toLocaleString(undefined, {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </div>
              <div style={{ display: "flex" }}>
                <time
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <svg
                    height={12}
                    width={12}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    />
                  </svg>
                  <span
                    style={{
                      color: "white",
                      fontSize: "12px",
                      fontFamily: "Roboto",
                    }}
                  >
                    {readingTime} minutos de lectura
                  </span>
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 450,
      fonts: [
        { name: "Merriweather", data: merriweather },
        { name: "Inter", data: inter },
        { name: "Roboto", data: roboto },
      ],
    }
  );
}
