// This is pinned to a specific version https://replicate.com/daanelson/flan-t5
const modelVersion =
  "fd8ed7161c14133273cfa8fdc60a10143a0107a7d4adeb495ba98f22257d965e";

export default async function handler(req, res) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version: modelVersion,

      // This is the text prompt that will be submitted by a form on the frontend
      input: { prompt: req.body.prompt },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
