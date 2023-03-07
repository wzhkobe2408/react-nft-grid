// "https://i.seadn.io/gcs/files/4031b0cc012e7ba9949572de6bf2c970.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/b7d44067ffe7dcb208b5d0e08660f821.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/6349a238f6741d05829f9df85c5a24cd.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/bd3cefbbf6eb834ef7a124af5ec5a132.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/a8981a04316e6b88d28fb71c7e7c7fea.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/70a6c3bd07eadc1bc3d082a2562448f8.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/48f3a16c4014fbf953f1dbcefd1df4bf.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/b3cea5ef89a24b9e8b226bc529fb2ead.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/80ea4e321350ccdadc212e08c41e1fff.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/505425aaa4475f8d3cc6ef9ac121357e.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/3b30a0f3bca403dc5361908b92a4d64f.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/7912a5651dacddd456865fd87eeb127c.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/7e37d1e8fdd1aa4c93f142681e9ea5fb.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/224552bf8ce762f1da6c978e55f92f51.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/714093c4a99db23da9d463f9defacb0b.png?auto=format&w=3840"
// "https://i.seadn.io/gcs/files/7a64f78816510860e1462b508c1891fc.png?auto=format&w=3840

const proxy = {
  "/api/user": {
    id: 1,
    username: "kenny",
    sex: 6,
  },
  "GET /api/user": {
    id: 1,
    username: "kenny",
    sex: 6,
  },
  "GET /api/user/list": [
    {
      id: 1,
      username: "kenny",
      sex: 6,
    },
    {
      id: 2,
      username: "kenny",
      sex: 6,
    },
  ],
  "GET /api/:owner/:repo/raw/:ref/(.*)": (req, res) => {
    const { owner, repo, ref } = req.params;
    // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    // owner => admin
    // repo => webpack-mock-api
    // ref => master
    // req.params[0] => add/ddd.md
    return res.json({
      id: 1,
      owner,
      repo,
      ref,
      path: req.params[0],
    });
  },
  "POST /api/login/account": (req, res) => {
    const { password, username } = req.body;
    if (password === "888888" && username === "admin") {
      return res.json({
        status: "ok",
        code: 0,
        token: "sdfsdfsdfdsf",
        data: {
          id: 1,
          username: "kenny",
          sex: 6,
        },
      });
    } else {
      return res.status(403).json({
        status: "error",
        code: 403,
      });
    }
  },
  "DELETE /api/user/:id": (req, res) => {
    console.log("---->", req.body);
    console.log("---->", req.params.id);
    res.send({ status: "ok", message: "删除成功！" });
  },
};

module.exports = proxy;
