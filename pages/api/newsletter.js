import fs from "fs";
import path from "path";

export const buildFilePath = () => {
  return path.join(process.cwd(), "data", "email-newsletter.json");
};

export const buildFileData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

const newsletter = (req, res) => {
  if (req.method === "POST") {
    const addData = { id: +new Date(), email: req.body.email };
    const filePath = buildFilePath();
    // const fileData = fs.readFileSync(filePath);
    const pushData = buildFileData(filePath);
    pushData.push(addData);
    fs.writeFileSync(filePath, JSON.stringify(pushData));
    res.status(200).json({ message: "SUKSES", registered: addData });
  }

  if (req.method === "GET") {
    const filePath = buildFilePath();
    const fileData = buildFileData(filePath);
    res.status(201).json({ data: fileData });
  }
};

export default newsletter;
