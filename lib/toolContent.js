// "About this tool" content shown under every tool (about 400–500 words each).
// Block format: { h: "Heading", p: ["paragraph", ...], list: ["item", ...] }

export const toolContent = {
  "area-calculator": {
    title: "Area Calculator",
    blocks: [
      { h: "What is the Area Calculator?", p: [
        "The Area Calculator finds the surface area of the most common flat shapes in a few seconds. Choose a shape such as a rectangle, square, circle, triangle, trapezoid, parallelogram, ellipse, rhombus or kite, enter the measurements, and the tool returns the area instantly. It also includes a 4-side plot option, which is handy when you are working with a piece of land that is not a perfect rectangle.",
        "Area tells you how much flat space a shape covers. People use it when buying flooring, painting walls, planning a garden, estimating the size of a plot, cutting fabric, or solving geometry homework. Doing these sums by hand is easy to get wrong, especially with circles and trapezoids, so a calculator saves time and avoids costly mistakes.",
      ]},
      { h: "How to use it", list: [
        "Select the shape you want from the drop-down list.",
        "Pick the unit of measurement you are working with.",
        "Enter the required dimensions, such as length and width, radius, or base and height.",
        "Read the area in the matching square units.",
      ]},
      { h: "Formulas behind the results", list: [
        "Rectangle: length × width. Square: side × side.",
        "Circle: π × radius². Ellipse: π × semi-major axis × semi-minor axis.",
        "Triangle: ½ × base × height.",
        "Trapezoid: ½ × (parallel side a + parallel side b) × height.",
        "Parallelogram: base × height.",
        "Rhombus and kite: ½ × diagonal 1 × diagonal 2.",
      ]},
      { h: "Tips for accurate results", p: [
        "Always measure every side in the same unit before you calculate. Mixing centimetres with metres, or feet with inches, is the most common reason for a wrong answer. Remember that the result is expressed in square units, so a rectangle measured in feet gives an answer in square feet.",
        "For height, use the perpendicular distance between the base and the opposite side, not the length of a slanted edge. For irregular rooms or plots, you can split the space into simple shapes, calculate each area separately and add the results together.",
        "When you are buying materials such as tiles, paint or turf, add roughly five to ten percent to your final figure to allow for waste and cuts. The calculator gives you the exact geometric area, so any extra allowance is up to you.",
        "This tool is a quick guide for planning and study. For legal land records, construction drawings or any official measurement, please rely on a qualified surveyor or the documents issued by the relevant authority.",
      ]},
    ],
  },

  "percentage-calculator": {
    title: "Percentage Calculator",
    blocks: [
      { h: "What is the Percentage Calculator?", p: [
        "The Percentage Calculator answers one of the most common questions in everyday maths: what percentage is one number of another? Enter a value and a total, and the tool instantly shows the result, for example that 25 is 12.5% of 200. It is quick, free and works on any device without signing up.",
        "Percentages appear everywhere. Students use them to work out exam scores, shoppers use them to compare offers, employees use them to understand salary changes, and business owners use them to track growth, margins and targets. A percentage simply expresses a part as a share of one hundred, which makes very different numbers easy to compare.",
      ]},
      { h: "How to use it", list: [
        "Type the value (the part) in the first box.",
        "Type the total (the whole) in the second box.",
        "Press calculate to see the percentage, rounded to two decimal places.",
        "Use reset to clear the fields and try another example.",
      ]},
      { h: "The formula", p: [
        "The calculation is straightforward: divide the value by the total, then multiply by 100. In short, percentage = (value ÷ total) × 100. If you scored 45 marks out of 60, the working is 45 ÷ 60 = 0.75, and 0.75 × 100 = 75%.",
      ]},
      { h: "Practical examples", list: [
        "Exam marks: 412 out of 500 is 82.4%.",
        "Budgeting: if rent is 18,000 from a salary of 60,000, rent takes 30% of your income.",
        "Business: if 340 of 2,000 website visitors made a purchase, the conversion rate is 17%.",
        "Fitness: if you have completed 18 of 24 planned workouts, you are 75% of the way there.",
      ]},
      { h: "Good to know", p: [
        "The total cannot be zero, because dividing by zero has no meaning, and the tool will ask you to enter a valid number. The percentage can be higher than 100 when the value is larger than the total. For example, 150 compared with 120 gives 125%, which simply means the value is one and a quarter times the total.",
        "If you need to add or subtract a percentage from a price, such as a discount or a tax, our Discount Calculator is designed for exactly that. For multi-step maths, try MathKit, which includes a scientific calculator with brackets and percent support.",
      ]},
      { h: "Frequently asked question", p: [
        "How do I turn a fraction into a percentage? Divide the top number by the bottom number and multiply by 100, which is exactly what this tool does. For instance, three out of eight is 0.375, so it equals 37.5%. Percentages are also useful for comparing results from tests with different totals, because 18 out of 20 and 45 out of 50 can be compared fairly once both are written as percentages, here 90% each.",
      ]},
    ],
  },

  "youtube-thumbnail-downloader": {
    title: "YouTube Thumbnail Downloader",
    blocks: [
      { h: "What is the YouTube Thumbnail Downloader?", p: [
        "The YouTube Thumbnail Downloader lets you view and save the thumbnail image of a public YouTube video. Paste the video link, and the tool shows the available thumbnail sizes so you can preview each one and download the version you need. There is nothing to install and no account is required.",
        "Creators often study thumbnails to see what works in their niche, designers use them as reference when planning a layout, and teachers or bloggers sometimes need a preview image for a lesson or article. Having a quick way to fetch the official image saves you from taking low-quality screenshots.",
      ]},
      { h: "How to download a thumbnail", list: [
        "Open the YouTube video and copy its address from the browser bar or the Share button.",
        "Paste the link into the box above.",
        "Choose between Maximum Resolution, High Quality, Medium Quality or Standard Quality.",
        "Open or download the image to your device.",
      ]},
      { h: "Which quality should you choose?", p: [
        "Maximum Resolution is the largest version and is best for editing, printing or using as a large banner. High, Medium and Standard qualities are smaller files that load faster and are suitable for previews, social posts or documents. Not every video has a maximum-resolution thumbnail, especially older or lower-resolution uploads, so a smaller size may be the only one available.",
      ]},
      { h: "Supported links", list: [
        "Standard watch links, for example youtube.com/watch?v=VIDEO_ID.",
        "Short links such as youtu.be/VIDEO_ID.",
        "Shorts and embed links that contain the video ID.",
      ]},
      { h: "Using thumbnails responsibly", p: [
        "A thumbnail belongs to the creator or channel that uploaded it. Downloading it for personal reference, research or commentary is generally fine, but you should not re-upload someone else's thumbnail as your own or use it in a way that misleads viewers. If you plan to use an image commercially, ask the owner for permission first.",
        "MasterKit is not affiliated with YouTube or Google. The tool only requests the public image that YouTube already serves for the video, so private or deleted videos will not work. If a link fails, check that the video is public and that the address is complete.",
        "If you design your own thumbnails, pair this tool with the Image Resizer and Compressor to get the exact dimensions and file size you need.",
      ]},
      { h: "Frequently asked question", p: [
        "Why does the maximum resolution image sometimes look the same as a smaller one? YouTube only creates the largest thumbnail when the uploaded image was big enough. If the creator used a small picture or an automatic frame from the video, the biggest available file may be the high-quality version. In that case simply download High Quality, which will still look sharp for most previews, blog posts and presentations.",
      ]},
    ],
  },

  "image-resizer": {
    title: "Image Resizer and Compressor",
    blocks: [
      { h: "What is the Image Resizer and Compressor?", p: [
        "This tool changes the dimensions and the file size of your pictures directly in the browser. You can make a photo smaller in pixels, lower its quality to cut the file size, and convert it between JPG, PNG and WebP. Because the work happens on your own device, your image is not uploaded to our servers, which keeps your photos private and makes the process fast.",
        "Large images slow down websites, fail to upload to forms with size limits and use up email attachments. Resizing and compressing solves all three problems while keeping the picture looking good on screen.",
      ]},
      { h: "How to resize and compress an image", list: [
        "Choose or drag an image into the tool.",
        "Set the new width and height, or keep the aspect ratio so the picture is not stretched.",
        "Adjust the quality slider. Lower values give a smaller file.",
        "Select the output format: JPG, PNG or WebP.",
        "Download the new image and compare the file sizes.",
      ]},
      { h: "Choosing the right format", list: [
        "JPG is best for photographs and gives small files at good quality.",
        "PNG keeps sharp edges and transparency, ideal for logos, screenshots and graphics, but files are larger.",
        "WebP usually produces the smallest files at similar visual quality and is supported by all modern browsers.",
      ]},
      { h: "Tips for better results", p: [
        "Resize first, then compress. Reducing the pixel dimensions removes the most data, and a gentle quality setting between 70 and 85 percent usually looks almost identical to the original. Avoid enlarging small images, because making a picture bigger than it was captured cannot add detail and will look blurry.",
        "Match the size to the place where the image will be used. A blog image rarely needs to be wider than about 1200 pixels, a profile picture works well at a few hundred pixels, and many application forms ask for a specific limit such as 100 KB or 200 KB, which you can reach by lowering the quality step by step.",
        "Keep your original file. Compression, especially to JPG or WebP, is lossy, which means some information is permanently discarded. If you may need the full-quality version later, save the optimised copy under a new name.",
        "Smaller images also help your website pass speed tests, which improves the experience for visitors on mobile connections.",
      ]},
      { h: "Frequently asked question", p: [
        "Will resizing reduce the quality of my picture? Making an image smaller in pixels keeps it sharp on screen, because fewer pixels are needed to show the same view. Quality only drops noticeably when you push compression too far, so try a few values and compare the preview. If the file is still too large, reduce the dimensions a little more before lowering the quality again.",
      ]},
    ],
  },

  "compound-interest-calculator": {
    title: "Compound Interest Calculator",
    blocks: [
      { h: "What is the Compound Interest Calculator?", p: [
        "The Compound Interest Calculator shows how an investment or savings balance can grow over time when the interest you earn is added back to the balance and starts earning interest itself. Enter your starting amount, the yearly interest rate, the number of years, how often interest is compounded and an optional monthly contribution, and the tool estimates your final balance and total interest earned.",
        "Compounding is often called the most powerful idea in personal finance. Unlike simple interest, which pays only on the original amount, compound interest rewards patience, so even a modest rate can produce a large difference over many years.",
      ]},
      { h: "How to use it", list: [
        "Enter the initial amount you are starting with.",
        "Add the expected annual interest rate as a percentage.",
        "Enter the length of time in years.",
        "Choose the compounding frequency: annually, semi-annually, quarterly, monthly or daily.",
        "Optionally add a regular monthly contribution and read your results.",
      ]},
      { h: "The formula", p: [
        "For a lump sum, the future value is A = P × (1 + r ÷ n)^(n × t), where P is the starting amount, r is the annual rate as a decimal, n is the number of compounding periods per year and t is the number of years. Regular contributions are added on top of this growth, so the calculator tracks both your own deposits and the interest they earn.",
      ]},
      { h: "A quick example", p: [
        "Imagine you invest 1,000 at 7% for 10 years with interest compounded monthly. Your balance grows to roughly 2,010, so the interest is about 1,010, slightly more than your original deposit. Add 100 every month and the final balance rises to roughly 19,300, showing how steady contributions combine with compounding.",
      ]},
      { h: "Things to remember", p: [
        "The result is an estimate based on a constant rate. Real investments rise and fall, and savings accounts can change their rates, so treat the figure as a planning guide rather than a promise. Fees, taxes and inflation are not included and can reduce your real return.",
        "The earlier you start and the more consistently you contribute, the more compounding works in your favour. Try changing one input at a time to see which has the biggest effect. This calculator is for education and is not financial advice; please speak to a qualified adviser before making investment decisions.",
      ]},
      { h: "Frequently asked question", p: [
        "Does compounding more often make a big difference? Moving from annual to monthly compounding raises the result slightly, and daily compounding adds only a little more. The interest rate and the number of years matter far more than the frequency, so focus first on finding a good rate, starting early and contributing regularly. Use the frequency drop-down to match the terms of your actual account or investment.",
      ]},
    ],
  },

  "loan-calculator": {
    title: "Loan Calculator",
    blocks: [
      { h: "What is the Loan Calculator?", p: [
        "The Loan Calculator estimates your monthly payment, the total interest and the total amount you will repay on a loan. Enter the loan amount, the annual interest rate and the term in years or months, and the results appear immediately. It is useful for car loans, personal loans, education loans and home financing when you want a clear picture before you borrow.",
        "Knowing the real cost of borrowing helps you compare offers, set a realistic budget and avoid commitments that strain your income. A loan with a low monthly payment can still cost far more overall if the term is long, and this tool makes that trade-off visible.",
      ]},
      { h: "How to use it", list: [
        "Enter the amount you plan to borrow.",
        "Enter the yearly interest rate as a percentage.",
        "Type the loan term and choose whether it is in years or months.",
        "Review the monthly payment, total interest and total repayment.",
      ]},
      { h: "How the payment is calculated", p: [
        "The calculator uses the standard amortisation formula for a fixed-rate loan: payment = P × r × (1 + r)^n ÷ ((1 + r)^n − 1). Here P is the loan amount, r is the monthly interest rate (the annual rate divided by 12) and n is the total number of monthly payments. If the interest rate is zero, the loan is simply divided evenly across the months.",
        "The total repayment is the monthly payment multiplied by the number of months, and the total interest is that figure minus the amount you borrowed.",
      ]},
      { h: "Ways to lower the cost of a loan", list: [
        "Choose a shorter term. Payments rise, but you pay far less interest overall.",
        "Make a larger down payment so you borrow less.",
        "Compare rates from several lenders before you decide.",
        "Make extra payments when you can, if the lender allows it without a penalty.",
      ]},
      { h: "Please note", p: [
        "The figures are estimates for a simple fixed-rate loan. Banks may add processing fees, insurance, taxes or a different way of calculating interest, and variable-rate loans change over time. Always check the official loan agreement for the exact numbers. This tool is for general information and is not financial advice.",
      ]},
      { h: "Frequently asked question", p: [
        "Is it better to choose a shorter or a longer term? A longer term gives a lower monthly payment, which can make a loan easier to manage, but you pay interest for more months and the total cost rises. A shorter term costs more each month yet saves a significant amount overall. Try both terms in the calculator, compare the total interest, and choose the payment you can comfortably afford every month, even in a tight month.",
      ]},
    ],
  },

  "discount-calculator": {
    title: "Discount Calculator",
    blocks: [
      { h: "What is the Discount Calculator?", p: [
        "The Discount Calculator tells you how much money you save and what you will actually pay when a product is on sale. Enter the original price and the discount percentage, and the tool shows the original price, the discount amount and the final price straight away. It takes the guesswork out of sale signs such as 20% off or 35% off.",
        "Shops often present several offers at once, and it can be hard to compare them in your head. With a quick calculation you can see whether a bigger percentage on a higher price really beats a smaller percentage on a cheaper item, and decide whether a deal is worth it.",
      ]},
      { h: "How to use it", list: [
        "Enter the original price shown on the tag.",
        "Enter the discount percentage offered.",
        "Press calculate to see the savings and the final price.",
        "Reset and try another product to compare deals.",
      ]},
      { h: "The formula", p: [
        "Discount amount = original price × (discount percentage ÷ 100). Final price = original price − discount amount. For example, a 2,500 jacket with 30% off has a discount of 2,500 × 0.30 = 750, so the final price is 1,750.",
      ]},
      { h: "Smart shopping tips", list: [
        "Compare the final price, not just the percentage. A higher percentage on an inflated price is not always a better deal.",
        "Check whether the original price is genuine by looking at the same product in other shops.",
        "Remember that two successive discounts do not add up. Taking 20% off and then another 10% off equals 28% in total, not 30%.",
        "Think about whether you needed the item at all. A discount only saves money on things you were going to buy.",
      ]},
      { h: "Good to know", p: [
        "The calculator works with any currency because it only handles numbers. Taxes, delivery charges and extra fees are not included, so add them separately if they apply. Discounts above 100 percent are not valid, and the tool will ask you to enter a sensible value.",
        "If you want to know what share one number is of another, such as how much of a budget you have spent, try the Percentage Calculator. Both tools are free, work in your browser and do not store your figures.",
      ]},
      { h: "Frequently asked question", p: [
        "How do I work out the original price from a sale price? Divide the sale price by one minus the discount as a decimal. For example, if a shirt costs 800 after a 20% discount, divide 800 by 0.80 to get an original price of 1,000. This is helpful for checking whether a shop really reduced a price, and it also shows how much you saved compared with the earlier tag.",
      ]},
    ],
  },

  "bmi-calculator": {
    title: "BMI Calculator",
    blocks: [
      { h: "What is the BMI Calculator?", p: [
        "The BMI Calculator works out your Body Mass Index, a simple number that compares your weight with your height. Enter your measurements in metric units (centimetres and kilograms) or imperial units (feet, inches and pounds), and the tool shows your BMI together with the category it falls into: underweight, healthy weight, overweight or obesity.",
        "BMI is widely used by doctors, nutritionists and health organisations as a quick screening tool because it is easy to calculate and needs no special equipment. It gives a general idea of whether your weight is in a range associated with good health.",
      ]},
      { h: "How to use it", list: [
        "Choose metric or imperial units.",
        "Enter your height and your weight.",
        "Press calculate to see your BMI value and category.",
        "Use the result as a starting point for a conversation about your health, not as a final verdict.",
      ]},
      { h: "The formula and categories", p: [
        "BMI is your weight in kilograms divided by your height in metres squared. A person who weighs 70 kg and is 1.75 m tall has a BMI of 70 ÷ (1.75 × 1.75), which is about 22.9. The commonly used adult ranges are:",
      ], list: [
        "Below 18.5: underweight.",
        "18.5 to 24.9: healthy weight.",
        "25 to 29.9: overweight.",
        "30 and above: obesity.",
      ]},
      { h: "Limitations of BMI", p: [
        "BMI does not measure body fat directly and cannot tell muscle from fat. A muscular athlete may have a high BMI while being very healthy, and an older adult may have a normal BMI but low muscle mass. It also does not consider age, sex, ethnicity, waist size or where fat is stored, and the standard ranges are intended for adults rather than children and teenagers.",
        "For a fuller picture, doctors also look at waist circumference, blood pressure, blood sugar, cholesterol, diet and activity level. If your result is outside the healthy range, or you are worried about your weight, speak to a doctor or registered dietitian.",
        "This calculator provides general information and is not a medical diagnosis. To plan your daily energy intake, you can also try our Calorie Calculator.",
      ]},
      { h: "Frequently asked question", p: [
        "How often should I check my BMI? Checking every few months is plenty, because weight changes slowly and daily fluctuations from water, food and exercise are normal. Measure at a similar time of day, ideally in the morning, wearing light clothes, so results stay comparable. If your BMI is moving steadily toward or away from the healthy range, discuss it with a professional, who can suggest a safe plan based on your whole health picture.",
      ]},
    ],
  },

  "calorie-calculator": {
    title: "Calorie Calculator",
    blocks: [
      { h: "What is the Calorie Calculator?", p: [
        "The Calorie Calculator estimates how many calories your body needs each day. Enter your age, gender, height, weight and activity level, and the tool shows your basal metabolic rate (BMR), your daily maintenance calories and suggested targets for losing or gaining weight. It gives you a practical starting point for planning meals.",
        "Your body burns energy all day, even when you rest. Knowing roughly how much you burn lets you eat in a way that matches your goal, whether that is to maintain your weight, lose fat gradually or build weight and muscle.",
      ]},
      { h: "How to use it", list: [
        "Select your gender and enter your age.",
        "Add your height and weight.",
        "Choose the activity level that best matches your week, from sedentary to extra active.",
        "Read your BMR, maintenance calories and weight goal targets.",
      ]},
      { h: "How the estimate is calculated", p: [
        "The calculator uses the Mifflin-St Jeor equation, which is considered one of the most accurate formulas for estimating resting energy use. For men, BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5. For women, the final number is minus 161 instead of plus 5.",
        "Your BMR is then multiplied by an activity factor to estimate total daily energy expenditure: 1.2 for little or no exercise, 1.375 for light activity, 1.55 for moderate activity, 1.725 for very active routines and 1.9 for extra active lifestyles. The result is your maintenance calories. Eating about 500 calories less per day is a common starting point for gradual weight loss, and about 500 more for weight gain.",
      ]},
      { h: "Using the result wisely", p: [
        "These numbers are estimates. Metabolism varies between people, and activity levels change from week to week, so treat the figure as a starting point. Track your weight and energy for two to three weeks, then adjust your intake up or down by a small amount.",
        "Avoid cutting calories too aggressively. Very low intakes can cause tiredness, muscle loss and nutrient deficiencies, and they are hard to maintain. Focus on balanced meals with enough protein, fibre, fruit and vegetables, and drink water through the day.",
        "This tool is not medical advice. If you are pregnant, are under 18, have a medical condition or a history of disordered eating, please talk to a healthcare professional before changing your diet. You can combine this tool with the BMI Calculator for a broader view of your health.",
      ]},
    ],
  },

  "word-counter": {
    title: "Word Counter",
    blocks: [
      { h: "What is the Word Counter?", p: [
        "The Word Counter counts the words, characters, sentences and paragraphs in any text as you type or paste it, and estimates how long it takes to read. The numbers update instantly, so you always know where you stand against a limit. It works for essays, articles, emails, social posts, product descriptions, scripts and more.",
        "Length matters in writing. Students have word limits on assignments, bloggers aim for a target length, copywriters have to fit character caps on ads and meta descriptions, and applicants must keep personal statements within a set size. A reliable counter makes it easy to stay on target.",
      ]},
      { h: "How to use it", list: [
        "Type directly in the box or paste your text.",
        "Watch the counts update in real time.",
        "Edit your text until it matches the length you need.",
        "Clear the box to start a new count.",
      ]},
      { h: "What the tool counts", list: [
        "Words: groups of characters separated by spaces or line breaks.",
        "Characters: every letter, number, space and symbol in your text.",
        "Sentences: sections of text ending in a full stop, question mark or exclamation mark.",
        "Paragraphs: blocks of text separated by blank lines.",
        "Reading time: an estimate based on an average adult reading speed of roughly 200 to 250 words per minute.",
      ]},
      { h: "Handy length guides", p: [
        "A tweet or short post is best kept under 280 characters. A search result description usually works well at around 150 to 160 characters, and a page title at about 50 to 60 characters. A typical blog post ranges from 800 to 2,000 words, while a one-page essay is about 500 words. College admission essays commonly sit between 250 and 650 words, depending on the application.",
        "Different programs count words in slightly different ways, for example when they treat hyphenated words or numbers, so a small difference of a few words compared with another tool is normal. If you are submitting to a strict limit, leave yourself a small safety margin.",
        "Your text is processed in your browser and is not stored or sent anywhere, so you can safely check drafts and private notes. For tidy placeholder content while you design a page, try the Lorem Ipsum Generator.",
      ]},
      { h: "Frequently asked question", p: [
        "Why does my word count differ from Microsoft Word or Google Docs? Each program has its own rules for hyphens, slashes, numbers and special symbols, so the totals can differ by a few words. If a limit is strict, treat the counts as a close estimate and keep a margin of a few words below the maximum. For character counts, remember that the main character count in this tool includes spaces, which matches what most forms and social platforms measure.",
      ]},
    ],
  },

  "lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator",
    blocks: [
      { h: "What is the Lorem Ipsum Generator?", p: [
        "The Lorem Ipsum Generator creates placeholder text that you can drop into designs, websites, documents and prototypes. Choose how many paragraphs, sentences or words you need, and the tool produces text that looks like real writing without distracting anyone with actual meaning. You can then copy it with a single click.",
        "Designers and developers use dummy text so that a layout can be judged on its visual qualities, such as spacing, line length and typography, before the final copy is ready. Without it, a mockup can look empty or, worse, people start reading and editing the wording instead of reviewing the design.",
      ]},
      { h: "How to use it", list: [
        "Choose whether you want paragraphs, sentences or words.",
        "Set the amount you need.",
        "Generate the text and review it.",
        "Copy the result and paste it into your design tool, code or document.",
      ]},
      { h: "Where does Lorem Ipsum come from?", p: [
        "The passage is based on a work by the Roman writer Cicero, written in 45 BC. Printers have used scrambled Latin-like text since the 1500s to fill pages while testing type, and it became widely known with the rise of desktop publishing. Because it is mostly altered Latin, it has a natural rhythm of word lengths that resembles English without being readable.",
      ]},
      { h: "When to use placeholder text", list: [
        "Website and app wireframes and mockups.",
        "Testing fonts, line height and column widths.",
        "Filling templates for newsletters, brochures and presentations.",
        "Checking how a CMS or theme handles long and short content.",
      ]},
      { h: "Tips for better results", p: [
        "Match the amount of dummy text to the real content you expect. If a product description will be two sentences, test with two sentences, not ten paragraphs. This reveals layout problems early.",
        "Replace placeholder text before you publish. Live pages that still contain Lorem Ipsum look unfinished, give visitors nothing useful to read and can harm how a site is perceived by search engines. Searching your project for the word lorem is a simple final check.",
        "Because the generator creates text in your browser, nothing is saved or uploaded. If you want to measure the length of what you generated, paste it into our Word Counter.",
      ]},
      { h: "Frequently asked question", p: [
        "Can I use Lorem Ipsum in a finished website? It is meant only as a temporary stand-in. Replace it with real, helpful content before launching, because empty-sounding text does nothing for your visitors and signals that a page is unfinished. Real copy also lets you test how headings, buttons and images work together, which dummy text cannot show accurately, so aim to replace placeholder text as early in a project as you can.",
      ]},
    ],
  },

  "json-formatter": {
    title: "JSON Formatter and Validator",
    blocks: [
      { h: "What is the JSON Formatter and Validator?", p: [
        "The JSON Formatter and Validator takes raw JSON and turns it into clean, indented, easy-to-read text. It also checks whether your JSON is valid and tells you when something is wrong, so you can fix errors before they break your application. You can format, validate, minify, copy and download your result without leaving the page.",
        "JSON, short for JavaScript Object Notation, is the most common format for exchanging data between servers, browsers and apps. APIs, configuration files and databases all use it. Unfortunately, JSON that comes straight from an API is often squeezed onto a single line, which is almost impossible to read.",
      ]},
      { h: "How to use it", list: [
        "Paste your JSON into the input box.",
        "Choose Format JSON to add indentation and line breaks, or Minify JSON to remove all unnecessary spaces.",
        "Choose Validate JSON to check the syntax and see any error message.",
        "Copy the result or download it as a .json file.",
      ]},
      { h: "Common JSON mistakes the validator helps you find", list: [
        "Trailing commas after the last item in an object or array.",
        "Single quotes instead of the double quotes JSON requires.",
        "Property names without quotes.",
        "Missing commas between items or a missing closing bracket or brace.",
        "Comments, which are not allowed in standard JSON.",
      ]},
      { h: "Format or minify?", p: [
        "Formatting is for people. Indented JSON is easier to read, review and debug. Minifying is for machines. Removing spaces and line breaks makes the file smaller, which saves bandwidth and speeds up requests when you send JSON over a network. Many developers keep a formatted version while working and ship a minified version in production.",
      ]},
      { h: "Privacy and good practice", p: [
        "The tool runs entirely in your browser, so the data you paste is not sent to any server. That makes it a safer option than many online tools when you are working with internal or sensitive data. Even so, avoid pasting real passwords, API keys or personal information into any website as a general habit, and replace sensitive values with dummy ones when you can.",
        "If you often work with text, you may also like our Word Counter and Text Repeater, which help you handle content quickly in the same way.",
      ]},
      { h: "Frequently asked question", p: [
        "Why does my JSON say it is invalid when it looks fine? The most common causes are a trailing comma, single quotes around keys or strings, or a missing bracket far from where the error is reported. Check the lines around the position mentioned in the message, then validate again after each fix. If your data came from JavaScript code, remember that JSON requires double quotes and does not allow functions, comments or undefined values.",
      ]},
    ],
  },

  "mathkit": {
    title: "MathKit",
    blocks: [
      { h: "What is MathKit?", p: [
        "MathKit is an all-in-one math toolkit that brings several useful calculators into one page. It includes a scientific calculator, a powers and roots tool, number theory helpers such as GCD, LCM, prime checks and factorials, a quadratic equation solver and a statistics calculator. Instead of searching for a different website for each task, you can switch between tabs and get on with your work.",
        "It is designed for students, teachers, engineers and anyone who needs more than plus, minus, multiply and divide. Everything runs in your browser, so results appear instantly and your numbers stay private.",
      ]},
      { h: "What is inside", list: [
        "Calculator: brackets, powers, square roots, percent, factorial, sine, cosine, tangent and their inverses, logarithms, pi and e, in degrees or radians. You can type 2π or 3(4+1) and implicit multiplication works.",
        "Powers and roots: square, cube, any power and any n-th root of a number.",
        "Number theory: greatest common divisor, least common multiple, prime check, prime factorisation and factorials.",
        "Quadratic solver: real and complex roots, the discriminant and the vertex of ax² + bx + c = 0.",
        "Statistics: mean, median, mode, range, variance and standard deviation for a list of numbers.",
      ]},
      { h: "How to use it", p: [
        "Pick a tab, enter your numbers and read the answer. In the calculator you can type an expression or tap the keypad, press equals and reuse previous results with the Ans key. The history list lets you bring back earlier expressions. For trigonometry, choose degrees or radians first, because sin(30) means very different things in each mode.",
      ]},
      { h: "Helpful notes", p: [
        "Calculations follow the standard order of operations: brackets first, then powers, then multiplication and division, and finally addition and subtraction. Percent is treated as dividing by 100, and factorials are available for whole numbers up to 1,000 in the number theory tab.",
        "For statistics, MathKit shows both population and sample standard deviation. Use the population value when your list is the whole group, and the sample value when your list is a sample taken from a larger group.",
        "Results are rounded to a sensible number of digits to avoid tiny floating-point errors, so sin(180) shows 0 instead of a long decimal. If an input is invalid, such as dividing by zero or taking the square root of a negative number, the tool explains the problem instead of showing a wrong answer.",
        "MathKit is free to use and ideal for homework checks, quick engineering sums and exam revision.",
      ]},
    ],
  },

  "negative-marks-calculator": {
    title: "Negative Marks Calculator",
    blocks: [
      { h: "What is the Negative Marks Calculator?", p: [
        "The Negative Marks Calculator works out your final score in a multiple-choice test that deducts marks for wrong answers. Enter the total number of questions, how many you answered correctly, how many you got wrong and the marks per correct answer, then choose the negative marking rule. The tool returns your score, percentage, accuracy and a full breakdown.",
        "Many entry tests, recruitment exams and competitive papers use negative marking to discourage random guessing. Because the penalty differs from exam to exam, it is easy to miscalculate your result by hand, especially with fractions such as one third.",
      ]},
      { h: "How to use it", list: [
        "Enter the total questions, correct answers and wrong answers.",
        "Set the marks awarded for each correct answer.",
        "Pick the penalty: none, one quarter, one third, one half, a full mark, or a custom value.",
        "Read your final score, percentage, accuracy and marks lost.",
      ]},
      { h: "The formula", p: [
        "Score = (correct answers × marks per correct answer) − (wrong answers × penalty per wrong answer). Unattempted questions neither add nor remove marks. If a paper gives 1 mark for a correct answer and deducts one quarter mark for a wrong one, then 60 correct and 20 wrong gives 60 − (20 × 0.25) = 55 marks.",
      ]},
      { h: "Should you guess?", p: [
        "The calculator also shows a break-even confidence level. With a penalty of one quarter mark per wrong answer, a guess is worth making only if you are more than 20 percent sure it is right. With a penalty of one third, the break-even point is 25 percent. If you can eliminate two of four options, your chance rises to 50 percent, which is clearly worth attempting under most schemes.",
      ]},
      { h: "Important reminders", list: [
        "Always confirm the marking scheme in the official exam notice, because rules differ between boards and tests.",
        "Some exams use different marks for different sections, in which case calculate each section separately and add the results.",
        "Your score can be negative if you answer mostly incorrectly, and the tool will show that honestly.",
        "This calculator estimates results for practice and planning, and it is not an official result.",
      ]},
      { h: "Frequently asked question", p: [
        "Can I use the calculator for tests with different marks per question? Yes. Set the marks for a correct answer to match your paper and use the custom option to enter the exact number of marks deducted for each wrong answer. For example, a test that gives 4 marks for a correct answer and takes away 1 mark for a wrong one needs only 4 in the first field and 1 in the custom box, and the result is calculated instantly.",
      ]},
    ],
  },

  "text-repeater": {
    title: "Text Repeater",
    blocks: [
      { h: "What is the Text Repeater?", p: [
        "The Text Repeater lets you repeat any word, sentence, emoji or paragraph as many times as you want in a single click. Type your text, choose how many times to repeat it, pick a separator and copy the result. You can repeat up to 10,000 times, add numbering and wrap each repeat with a prefix or suffix.",
        "It saves the boring work of copying and pasting the same text again and again. Developers use it to create test data and sample lists, designers use it to fill layouts, teachers use it to prepare practice sheets, and social media users use it for fun captions and messages.",
      ]},
      { h: "How to use it", list: [
        "Type or paste the text you want to repeat.",
        "Enter the repeat count or tap a quick button such as ×10 or ×100.",
        "Choose a separator: new line, space, comma, tab, dash, pipe, blank line or your own custom one.",
        "Optionally turn on numbering or add text before and after each repeat.",
        "Copy the result or download it as a .txt file.",
      ]},
      { h: "Smart options explained", list: [
        "Separator controls what goes between repeats. A comma and space creates a list, while a new line creates one item per line.",
        "Custom separator accepts any characters, and you can type \\n for a new line or \\t for a tab.",
        "Number each repeat adds 1. 2. 3. in front of every line, which is useful for numbered lists.",
        "Prefix and suffix wrap every repeat, for example in quotation marks or HTML tags, to build code snippets quickly.",
      ]},
      { h: "Practical uses", p: [
        "Create dummy data to test forms, databases and spreadsheets. Generate repeated lines to check how a layout handles long content. Build lists of keywords separated by commas. Produce a practice sheet where a word is written many times. Create decorative text patterns for bios and posts.",
        "To keep your browser fast, the tool limits the output to 10,000 repeats or one million characters, and it will tell you if the limit was reached. Everything is processed on your own device, so your text is never uploaded.",
        "Please use repeated text responsibly. Sending the same message again and again to other people can be annoying or may break the rules of a platform, so use the tool for creative, testing and productivity purposes.",
        "After you repeat your text, you can check its length with the Word Counter.",
      ]},
      { h: "Frequently asked question", p: [
        "Can I repeat text with line numbers or inside quotation marks? Yes. Turn on numbering to add 1. 2. 3. before every line, and use the before and after boxes to wrap each repeat in quotes, brackets or tags. For example, adding a quotation mark on both sides and choosing a comma separator gives a ready list of quoted values that you can paste directly into code, a spreadsheet or a configuration file.",
      ]},
    ],
  },

  "time-table-maker": {
    title: "Time Table Maker",
    blocks: [
      { h: "What is the Time Table Maker?", p: [
        "The Time Table Maker helps you build a clean, colourful weekly schedule for school, college, tuition or self-study. Add your periods, set the start and end times, type the subject for each day and watch a neat table appear. When you are happy with it, print it or save it as a PDF to stick on your wall or share with friends.",
        "A good timetable removes daily guesswork. Students always know what to pack, teachers can see their week at a glance, and anyone preparing for an exam can protect time for revision, rest and practice.",
      ]},
      { h: "How to create your time table", list: [
        "Start from a School, College or Study plan template, or begin with a blank table.",
        "Give your table a title and optionally add a name, class or semester.",
        "Choose which days to show, from Monday to Sunday.",
        "Edit the times and type the subjects. Add extra periods and breaks as needed.",
        "Use Print / Save PDF, copy the text, or download a CSV for Excel and Google Sheets.",
      ]},
      { h: "Features", list: [
        "Automatic colours: every subject gets its own colour so patterns are easy to spot.",
        "Breaks and lunch rows that span the whole week.",
        "12-hour and 24-hour time formats.",
        "Auto-save in your browser, so your work is still there when you come back.",
        "Print-friendly layout that hides everything except the table.",
      ]},
      { h: "Tips for a timetable that works", p: [
        "Be realistic. Plan breaks and travel time, and do not fill every minute. Place difficult subjects when your energy is highest, and keep short revision slots for subjects that need repetition. Leave at least one lighter day or a free evening each week so that the plan is sustainable.",
        "For exam preparation, rotate subjects instead of studying one for many hours, and include practice tests. Review your timetable after a week and adjust anything that did not work.",
        "To save as a PDF, press Print / Save PDF and choose Save as PDF as the destination in the print window. Landscape orientation usually gives the best result for wide tables.",
        "Your timetable is stored only in your own browser and is never uploaded. Clearing your browser data will remove it, so download the CSV if you want a permanent copy.",
      ]},
      { h: "Frequently asked question", p: [
        "Can I make a timetable with different subjects on each day? Absolutely. Every cell is independent, so you can place any subject in any period. Use the same name each time, such as Math, and the tool will always give it the same colour, which makes weekly patterns clear. Add a break row for lunch or prayer time, and remove a period that is not needed for a particular schedule.",
      ]},
    ],
  },
};

export const countWords = (c) =>
  [c.title, ...c.blocks.flatMap((b) => [b.h, ...(b.p || []), ...(b.list || [])])]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
