export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "IoT มีข้อดีหลายอย่างและใช้ได้ในหลายอุตสาหกรรม ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "สามารถเก็บข้อมูลและวิเคราะห์",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "ตรวจสอบและบำรุงในเชิงป้องกัน",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "การควบคุมระยะไกล.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "ใช้ในงานขนส่งและโลจิสติกส์",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "สมาร์ทโฮมและสมาร์ทซิตี้",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ESP-32 CAM",
    des: "กล้องใช้จับภาพที่มีคุณภาพและราคาย่อมเยาว์",
    img: "/iot2.jpg",
    iconLists: ["ard.png"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Servo",
    des: "มอเตอร์ไฟฟ้าที่ออกแบบมาเพื่อให้ควบคุมตำแหน่ง, ความเร็ว, และแรงบิดได้อย่างแม่นยำ",
    img: "/iot3.jpg",
    iconLists: ["ard.png"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "CNN",
    des: "แบบจำลองการเรียนรู้ของเครื่องที่ออกแบบมาเพื่อการประมวลผลและการวิเคราะห์ภาพ",
    img: "/cnn.jpg",
    iconLists: ["/ai.png"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "OCR",
    des: "เทคโนโลยีที่แปลงข้อความในภาพหรือเอกสารสแกนเป็นข้อมูลที่สามารถแก้ไขหรือค้นหา",
    img: "/ocr.jpg",
    iconLists: ["/ai.png"],
    link: "/ui.apple.com",
  },
];



export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Easy OCR",
    desc: "เราได้นำ Easy OCR ในการแยกตัวอักษรในป้ายทะเบียนเพื่อการเก็บข้อมูลป้ายทะเบียน โดยจะทำการแยกตัวอักษรจากภาพที่ได้มาจากการประมวลผลผ่าน YOLO และนำมาเปรียบเทียบกับ Tesseract OCR",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Tesseract OCR",
    desc: "รถ เราได้นำ Tesseract ในการแยกตัวอักษรในป้ายทะเบียนเพื่อการเก็บข้อมูลป้ายทะเบียน โดยจะทำการแยกตัวอักษรจากภาพที่ได้มาจากการประมวลผลผ่าน YOLO และนำมาเปรียบเทียบกับ Easy OCR",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "You Only Look Once(YOLO)",
    desc: "รถ เราได้นำ YOLO มาตรวจจับรถยนต์และป้ายทะเบียนรถยนต์ โดยรับภาพมาจากกล้อง Arduino ESP32 ซึ่งจะแบ่งออกเป็น 2 การทำงาน คือ การตรวจจับหลังคารถ และการตรวจจับครอบของป้ายทะเบียนรถยนต์",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Arduino",
    desc: "เราได้นำ Arduino มาใช้งานร่วมกับกล้อง Arduino ESP32 ในการตรวจจับภาพ ไม่ว่าจะเป็นภาพของรถยนต์ ป้ายทะเบียนรถยนต์ และที่ว่างภายในลานจอดรถ นอกจากนี้ยังมีการใช้งานเซนเซอร์ Servo ในการเปิดและปิดไม้กั้นทางเข้าออกลานจอดรถ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
