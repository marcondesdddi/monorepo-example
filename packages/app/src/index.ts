import { app } from "@/main/config"

try {
  const appPort = 3000

  app.get("/", (req, res) => {
    res.send("Hello World!")
  })

  app.listen({ port: appPort, host: "0.0.0.0" }, () =>
    console.log(`API running http://localhost:${appPort}`)
  )
} catch (e) {
  console.error(e)
}
