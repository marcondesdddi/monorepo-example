import { app } from "@/main/config"
import "reflect-metadata"

try {
  const appPort = 3000

  app.listen({ port: appPort, host: "0.0.0.0" }, () =>
    console.log(`API running http://localhost:${appPort}`)
  )
} catch (e) {
  console.error(e)
}
