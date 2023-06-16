import { app } from "@/main/config"

try {
  const appPort = 3000

  app.listen({ port: appPort, host: "0.0.0.0" }, () =>
    console.log(`API running http://localhost:${appPort}`)
  )

  // app.ready(() => {
  //   const routes = app.printRoutes()
  //   console.log(`Available Routes:\n${routes}`)
  // })
} catch (e) {
  console.error(e)
}
