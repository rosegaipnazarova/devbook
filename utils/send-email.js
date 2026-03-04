const nodemailer = require("nodemailer")
const CustomErrorhandler = require("../error/custom-error.handle")

async function sendMessage(code, email) {
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:"rosegaipnazarova@gmail.com",
                pass: process.env.GOOGLE_PASS 
            }
        })

        await transporter.sendMail({
            subject: "Lesson",
            from:"rosegaipnazarova@gmail.com" ,
            to:email,

            html:`
            <!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kitob Sevgisi</title>
    <style>
        /* Umumiy sozlamalar */
        body {
            margin: 0;
            padding: 0;
            background-color: #fdfaf5; /* Qog'oz rangidagi fon */
            font-family: 'Georgia', 'Times New Roman', serif;
            color: #3e2723;
        }

        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #fdfaf5;
            padding-bottom: 40px;
        }

        .main-card {
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            border: 1px solid #e0d5c1;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        /* Yuqori qism - Banner */
        .hero {
            background-color: #5d4037;
            background-image: linear-gradient(rgba(93, 64, 55, 0.8), rgba(93, 64, 55, 0.8)), 
                              url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
            background-size: cover;
            background-position: center;
            padding: 60px 20px;
            text-align: center;
            color: #ffffff;
        }

        .hero h1 {
            margin: 0;
            font-size: 28px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* Asosiy matn qismi */
        .content {
            padding: 40px 30px;
            text-align: center;
        }

        .content h2 {
            color: #8d6e63;
            font-size: 22px;
            margin-bottom: 20px;
        }

        .content p {
            font-size: 17px;
            line-height: 1.8;
            color: #5d4037;
            margin-bottom: 25px;
        }

        /* Hissiyotli iqtibos */
        .quote-box {
            background-color: #fcf8f3;
            border-left: 4px solid #d7ccc8;
            padding: 20px;
            margin: 30px 0;
            font-style: italic;
            color: #6d4c41;
            text-align: left;
        }

        /* Tugma */
        .btn-container {
            margin-top: 35px;
        }

        .btn {
            background-color: #8d6e63;
            color: #ffffff !important;
            padding: 15px 35px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 50px;
            display: inline-block;
            transition: background 0.3s;
        }

        /* Pastki qism */
        .footer {
            padding: 30px;
            text-align: center;
            background-color: #f4f1ea;
            font-size: 13px;
            color: #a1887f;
        }

        .social-links {
            margin-bottom: 15px;
        }

        .social-links a {
            color: #8d6e63;
            text-decoration: none;
            margin: 0 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main-card">
            <div class="hero">
                <h1>Mutolaa Zavqi</h1>
            </div>

            <div class="content">
                <h2>Yangi sarguzashtga tayyormisiz?</h2>
                <p>
                    Assalomu alaykum, aziz kitobxon! <br>
                    Kitob javonimizda sizning qalbingizga yo'l topuvchi, 
                    fikrlaringizni boyituvchi va sizni sehrli dunyolarga yetaklovchi 
                    yangi asarlar paydo bo'ldi.
                </p>

                <div class="quote-box">
                    "Yaxshi kitob — bu suhbatdosh, u sizni eshitadi, tushunadi va eng qiyin lahzalarda yo'l ko'rsatadi."
                </div>

                <p>Har bir sahifa — bu yangi hayot. Uni biz bilan birga varaqlang.</p>

                <div class="btn-container">
                    <a href="#" class="btn">Kutubxonani ko'zdan kechirish</a>
                </div>
            </div>

            <div class="footer">
                <div class="social-links">
                    <a href="#">Telegram</a> | <a href="#">Instagram</a> | <a href="#">Website</a>
                </div>
                <p>Ushbu xabar sizga kitoblarga bo'lgan muhabbatingiz uchun yuborildi.</p>
                <p>&copy; 2024 Sizning Kitob Do'koningiz. Barcha huquqlar himoyalangan.</p>
            </div>
        </div>
    </div>
</body>
</html>`
        })
    }catch(error){
        throw CustomErrorhandler.InternalServerError(error.message)
    }
}  

module.exports = sendMessage