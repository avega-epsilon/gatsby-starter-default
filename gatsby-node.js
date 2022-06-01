exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  
  createRedirect({
    fromPath: `/tag_path/*`,
    toPath: `https://c1234.csd.dotomi.com/*`,
    statusCode: 200,
  })
}
