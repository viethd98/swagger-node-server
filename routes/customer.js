const express = require("express");

const router = express.Router();

/**
 * @swagger
 * "/customers":
 *   get:
 *     tags: [Customers]
 *     summary: "Get a list Customers."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "limit" 
 *         description: "return limit response records"
 *         in: query
 *         type: init
 *         default: 12
 *     responses:
 *       200:
 *         description: "A successful"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Get successful list customers"
 *               type: boolean
 *               example: true
 *       403:
 *         description: "Forbiden"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "Forbiden"
 *               type: boolean
 *               example: true
 *       
 */
router.get("/", (req, res) => {
    console.log(req);
    res.send("asdsad")
});

module.exports = router;
