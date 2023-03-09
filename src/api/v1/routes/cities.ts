import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {

    res.status(200).json({
        "result": true,
    })
})


export default router;