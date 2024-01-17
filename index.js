const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const tmi = require('tmi.js'),
    { channel, channelt, username, password, client_id, api_access_token, channel_access_token, boy, girl, eiad } = require('./settings.json');

var request = require('request');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel, /* channelt */]
};

const headers = {
    Authorization: `Bearer ${api_access_token}`,
    'Client-Id': client_id
}

const headers_2 = {
    Authorization: `Bearer ${channel_access_token}`,
    'Client-Id': client_id,
    'Content-Type': 'application/json'
}

async function getUser(user) {
    const params = { login: user };
    const result = await fetch(`https://api.twitch.tv/helix/users?` + new URLSearchParams(params), {
      method: 'GET',
      headers: headers
    }).then((response => response.json()))
    
    return result
}

async function getRandomViewer(channel_name) {
    const params = {channel : channel_name}

    const result = await fetch("https://2g.be/twitch/randomviewer.php?" + new URLSearchParams(params), {
        method: 'GET',
    }).then((response => response.text()))

    return result
}

function extractArgs(str) {
    const regex = /\(([^)]*)\)|\b(\w+)\b/g;
    return Array.from(str.matchAll(regex), match => match[1] || match[2]);
}

const client = new tmi.Client(options);
client.connect().catch(console.error);

const list1 = [ 'هات حب محمص ومع كوب شاي','جيب لي عدس مع خبز تميس وكرك والحساب ع ابوي','النفسية يادوبك مابي اكل','ابي شوكلت مابي اكل','انت بذات مابي منك شيء ابوي منبهني منك يمكن تسممني','ما اخذ من غرباء','هابي ميل نجت ولعبة اولاد بليز','صايمه','ماكل ذبيحة قبل شوي والكرشة مترين قدام ',' مسوي رجيم ',' شوف اذا على حسابك هات اي شيء ',' شوف دامك سألتني حبيت اقولك اني مسوي تكميم ',' وش الفايده من الاكل ',' اندومي  ',' عندي توست وجبن تبي؟ ',' ابي مفطح ',' لامعي القمريه والنفسيه لك عليها بس شكرًا ل سؤال ',' تدري انا عازمك وش تبي تاكل انت ',' لا شكرًا توه بابا جاب لي اكل ',' انا ما ابي اكل انا ابيك انت (ايموت يعض على شفايفه) ',' شوفت صورتك احلى من اي اكل ',' الله ع ريش وكباب وصحن حمص ',' نص حبه من البيك حراق مع ببسي و زايده كوكتيل ','  شباتي و كرك ',' مالي نفس توه ابوي معطيني محاضرة عشان تحرشت بوحدة حلوه بس وش اسوي يقطع شكلها مززززة ',' برجر لحم مع بطاطس بالجبن ',' سلطه لانه تأنيب الضمير شغال ',' هات اي حاجه لو تجي انت راح اكلك ',' هممممم ما ادري وش تشوف انت؟ ',' الله على صحن كشري ',' صاروخ كبير بالجنبه ',' صحن فلافل مشكل ',' كبسة لحم يميي ',' انا نبته اتغذى على الطاقه الشمسية ',' ما ادري ',' رامن نفس اللي في ناروتو ','  منتو مع شطة وكمون ',' بيتزا اطراف جبن ',' معصوب ',' عريكة جنوبيه ',' ابي شكشوكة ',' ماكرونه باشميل ',' فتوتشيني ',' سليق طايفي ',' نص تيس مندي ',' مضغوط ',' مسوي خوي ',' شوف دامك سألت انا كنت احب وحده بس طلعت تحبي وسحب عليها ','  ما ابي بس اذا عندك مويه مانقول لا ',' ستريبز ',' دونات طويله ',' شوف مالي خلق اكل اكتب  شرب؟ لانه احس اني عطشاااان ',' انت بالذات لاتسوي خوي ',' خبز ناشف زي حياتي ناشفه ',' نفسي ب رهش و جام ',' بلاليط ',' فول وتميس ',' لا شبعان بس نفسي في ايسكريم ',' حبحب صيفي ',' خبز و زبادي ',' ملوخيه بالارانب ',' دولمة عراقيه ',' ايسكريم فانيليا من ماك ',' سوشي ',' مطبق ',' كبدة وتقاطيع ',' كودو دجاج ',' فاهيتا ','كونفليكس ',' عسل يا عسل ',' كباب ',' تبوله ',' برجر لحم مشوي ',' وجبه من البيك ',' سمك وصياديه ',' روبيان 🍤 ',' انت ابعد عني وبس',]

let randomName2 = list1[Math.floor(Math.random()*list1.length)]
        
console.log(randomName2)

const list20 = ['مدينه بحرف', 'سياره بحرف', 'ماركه بحرف','اسم بحرف','جماد بحرف','تطبيق بحرف','فريق بحرف','فلم بحرف','مسلسل بحرف','لعبه بحرف',]

let randomName0 = list20[Math.floor(Math.random()*list20.length)]
        
console.log(randomName0)

const list30 = ['ج' ,' ح',' خ' ,' ه' ,' ع' ,' غ' ,' ف' ,' ق' ,'ث ' ,' ص' ,' ض' ,' ط' ,' ك' ,' م' ,' ن' ,' ت' ,' ا' ,' ل' ,' ب',' ي' ,' ي','ش' ,' د' ,' ظ' ,' ز' ,' و' ,' و' ,' ر' ,' ذ']

let randomElement00 = list30[Math.floor(Math.random()*list30.length)]
        
console.log(randomElement00)

const list4 = ['خذني على البحر ولعبني بسكوتر','شفت المكسرات؟ انا متكسر اكثر منها اعتذر من الطلعة', 'لا انت نفسية ما ينطلع معك', 'اذا بتعزمني ع حسابك تم', 'لا بنام مو فاضي', 'الوقت تأخر ماما وبابا ما يرضون ',' ايه مشينا عندي نكتة جديدة بس عندك قهوة؟ ',' شوف معي سنارة صيد للسمك مشينا ',' لا مطفر ',' مشينا نكشت ونشب الضوء ',' شوف ودي من زمان اقولك بس كنت مستحي بس دامها جات منك تمتمتمتمتم ',' سؤال عني يكفيني عن الف طلعه تعال دس بقولك سر ',' ليه نطلع وانا جالس في قلبك ',' شوف وراي بكرة دوام وغثاء لذلك صرف  نفسك ',' اي الزكمة ذبحتني','اللي يتعايش مع امي وابوي غصب عنه يتعب','لا بس جوعان','شدخلك','تعبان اي والله تعبان تعبان وهمي اه اه','تعبان وبصير زين لو عطيتني بوسة وحلاوة ',' ابي مكان زحمه وفي ناس alwuteWink ',' مشينا يلا اي مكان طفشت وانا جالس عند المايك وهذا بس يتفل علي ',' مشغول مشغول جالس اراقب الوضع ',' شوف دامك ملزم يصير نطلع على حساب خديجة موافق؟ ',' شوف اللي تحتي ممكن يبي يطلع ',' صمت ',' بدري بدري من صلاة العصر انا انتظرك تقول نطلع جايني الحين الساعه 12 تبي نطلع؟؟؟؟ ',' لا عندي موعد غرامي  lilfokaAr7b ',' لا ابي ارقص شغل لي شيء يخليني اترقص ',' تعرف تدق عود؟ ',' عارف لك مخطط جديد عليه جلسات',]

let randomElement1 = list4[Math.floor(Math.random()*list4.length)]
        
console.log(randomElement1)

const list5 = ['جوي','انا دايمًا المركز الاول بالعالم مو مثل بابا ضئيل','مالي خلق ابي اتبطح وازط', 'لعبتكم نايمه','مكانتي ما تسمح لي ألعب معكم', 'العبو مع ابوي الي مو فالح الا بالخسارة والهبد','لا مالي نفس بتفرج عليكم بس ',' حسن مستواك وتعال ',' انت غبي تتحدى بوت ',' شوف اذا فيها عشى قُدَّام ',' لا انا فاشل انا حشرة انا ضئيل بس ماراح تفوز علي ',' مسوي خوي ',' معي اتصال دقيقه   herodevilAKAFBI   ',' امي تبي خبز ',' ما اقدر لانه مررررة جوعان ',' جالس احتسي القهوة السوداء ',' لا انا اجازة اليوم ',' مسوي مشاكل مع ابوي ',' ابي اتزوج ماني فاضي حقك ',' انا خلني احل واجبي قال تحدي قال',]

let randomElement2 = list5[Math.floor(Math.random()*list5.length)]
        
console.log(randomElement2)

const list6 = ['وش قهوته انا من حزب الشاي','ما اشرب الا قهوة عربية ولو سمحت لازم حلا','لا اشرب الا القهوة المُقطرة','وش قهوة مافي اطلق من الحليب الفراولة السعودية','بسال ماما اذا عادي لان تقول ان بس للعجايز','مطفر','سبانش لاتيه', 'لا شربت ',' قهوة من دانك حجم وسط دارك روست ',' كرك ',' شاي اخضر توي ماكل ',' ماتشا ',' ايس شيكن فرابتشينو دبل شوت ايسبريسو ',' كارميل ميكانو ',' مويه وحارة بعد ',' سنتوب ',' حمضيات ',' ببسي دايت ',' تفاح صح مو شيء ثاني ',' لا جيعان ',' فيمتو باااارد ',' زنجبيل لانه حلقي مكربن ',' حل عني حل ',' لا ابي اكل اكتب اكل؟ ',' ونبيس عمك احم احم بالخطاء لا ما ابي اشرب ',' شوف اسأل هذا @txb_r ',' دم ',' كودريد نكهه ',' بلاك كافي كسواد دنياي ','ابي غوار ',' بابونج ',' شاي مغربي ',' بيرة؟ ',' هات اي شيء ',' لبن بارد ',' صايم ',' لا زعلان ',' هات سفن بطني جالس يسوي حركات ',' لا وحل عني ',' شتبي؟؟ مسوي خوي ',' شوف كنت بتقبل من الكل بس منك انت؟؟ قلوا الناس ',' شاي منعنع مع فصفص واحلى حش ',' كورتادو ',' لاتيه والحليب لوز عشان تعرف فيجن ',]

let randomElement3 = list6[Math.floor(Math.random()*list6.length)]
        
console.log(randomElement3)

const list7 = ['شيء نفسك يرجع ؟',' من علامات روقانك ؟ ','مين تتوقع ينظر إليك طول الوقت بدون ملل ؟ ',' وش اسم الحي الي ساكن فيه ؟',' لو واحد يتدخل ف امورك وانت م طلبت منه وش بتقوله ؟',' وش اول طريقة تتبعها اذا جيت تراضي شخص آخر ',' شيء اشتريته عبر الانترنت، وكيف كانت تجربتك ؟',' شيء عندك اهم من الناس',' كذبة كنت تصدقها وانت صغير','  لو أتيح لك الزواج من غير جنسيتك، اي جنسية ستختار ؟',' اسف تقولها لمين ؟',' كم وزنك ؟',' افضل طريقة تراضي فيها شخص قريب منك ؟ ','اعز صديق عندك كيف تعرفت عليه ؟ ',' اكثر شخص يسوي فيك مقالب ؟ ','حكمة تؤمن بها جدا؟؟ ولماذا؟ و على من طبقتها ؟ ',' شخص يعرف عنك كل شي تقريباً ؟',' اشياء اذا سويتها لشخص تدل على انك تحبه كثير ؟',' مع او ضد: خير لك ان تكون مغفلاً من ان تستغفل غيرك  ',' ثلاث اشياء جنبك الحين ؟ ','جربت الشهرة او تتمناها ؟ ',' لو كنت شخصية انمي اي شخصية بتكون ؟',' اكثر مكان تحب تجلس فيه في البيت ؟',' منشن شخص لو م شفته تحس يومك ناقص ؟',' اكثر شيء ضيعت عليه فلوسك ؟',' عرف عن نفسك بسطر','  وش اكثر سؤال يدور في بالك ؟',' شيء من الماضي للحين عندك ؟',' اذا كنت بنقاش مع شخص وطلع الحق معه تعترف له ولا تصر على كلامك ؟',' عمرك طحت بمكان عام ؟',' ما معنى الحب بنظرك ؟',' خطط السفر الخاصة بك غالبًا ما تكون مدروسة ؟',' لو شلنا من طولك 100 كم يبقى من طولك ؟',' اكتب اول كلمة جات في بالك الحين ؟',' أطول مدة نمت فيها كم ساعه ؟',' ليت الدّنيا حلوه مثّل ؟ ','بماذا يُحدثك قلبك هذه الأيام ؟ ','من النوع اللي تحفظ اسامي الناس بسرعه ولا بس اشكالهم ؟ ',' أخر مرة نزل عندكم مطر ؟',' كيف سيكون العالم لو كان مثلك ؟',' كم من 10 تحس بـ الطفش ؟ ','لو احد بيذكرك فيه وانت ناسي بتسلك له ؟ ','حكمة اليوم وكل يوم ؟ ',' هل انت من لديهم رغبة حب التملك واذا تملك الشيء اصابه الملل منه ؟',' ماهو اخطر عدو للانسان ؟',' من الاشياء البسيطة اللي تسعدك ؟',' لو كنت ممثل وش تتوقع الدور الي بتتقنه؟',' هل تقلق بما يعتقده الآخرون عنك ؟',' وش اسم اول شخص تعرفت عليه في التويتش ؟',' اتفه شيء ارسلوك عشانه ؟',' وظيفة تحسها لايقة عليك ؟',' تفضل اللوان داكنة ولا فاتحه ؟',' اهم شيء يكون معك في كل طلعاتك ؟',' الشخص الذي اعترف لك بالحب استمر بحبك أم تبخر كالعادة؟',' متى لازم تقول لا ؟',' اغنيتك المفضلة',' ... جربت تروح اختبار بدون ما تذاكر ؟',' كم من عشرة تقيم يومك ؟',' قوة الصداقة بالمدة ولا بالمواقف ؟ ','مقوله او مثل او بيت شعر قريب من قلبك ؟ ','أكتب شيء تؤجر عليه ... ',' غالبًا وش تسوي الأن لو ماكان في بث تركي ؟ ','لو رجع لك شخص تعرفه بعد علاقته بالخيانة ، راح ترجع نفس اول ؟ ',' لو التمني يصير حقيقة وش بتسوي؟ "وش امنيتك بتكون','@منشن: الشخص الي عادي تقوله اسرارك ',' احقر الناس هو من ؟',' عادة غريبة تسويها',' .. تحب المكالمات الطويلة ؟',' اكثر شخص فاهمك بالدنيا ؟',' أجمل اسم بنت بحرف السين ؟',' وش تقول اذا شفت وجهك بالمراية ؟',' عمرك فضفضت لـ شخص وندمت ؟','تشوف انك قادر على تحمل المسؤولية ؟ ',' اسم الطف شخص مر عليك الكترونياً',' لو خيروك بين يعطونك مليون أو راتب شهري متوسط بدون عمل مدى الحياة إيش تختار ؟ ',' لو فقط مسموح شخص واحد تتابعه في السناب فمن بيكون ؟ ',' (انت كل شيء بحياتي) لمن تقولها ؟',' شخص يكلمك بشكل يومي ؟',' ايموجي يعبر عن وضعك الحين ؟',' اكثر مصايبك مع مين ؟',' عادي تطلع وجوالك مافيه شحن كثير ؟','  تقدر تسيطر على (ضحكتك - نومك - جوعك)؟؟ ',' كم من عشرة تحب الجلسة بالبيت ؟',' مع او ضد: دائما يكون اهتمامنا مع الانسان الخطأ','  أكثر شي شاغل تفكيرك هاليومين ؟','مع او ضد: لو ما اخذت شيء معك وقت زيارة احد انت مقصر  ','أكثر حيوان تحبه ؟ ',' من النوع اللي تعتمد على غيرك ولا كل شي تسويه بنفسك ؟',' وش ابشع شعور مريت فيه ','كم نسبة الغيرة عندك من 10 ','  متى اخر مره قلت ليتني سكت ؟',' أنت على منبر الآن والجميع يستمع، ماذا ستقول ؟','اذا زعلت إيش يرضيك ؟ ',' مع كم صديق حقيقي خرجت خلال مسيرتك للآن؟',' حلمك بالمستقبل ؟',' شايل هم شيء ؟',' "المنطقي عديم إحساس" مع أو ضد والسبب؟ لقبك عند اخوياك ؟',' كم تحتاج وقت عشان تتعود على مكان جديد ؟',' لو للحياة لون إيش بيكون لون حياتك ؟',' لو أصبت بحالة اكتئاب هل لديك مانع من اللجوء إلى طبيب نفسي؟',' اكلة ادمنتها الفترة ذي ؟',' كم تعطي نفسك من 10 في اللغة الانجليزية ؟',' العصر إيش كنت تسوي ؟',' كم تعطي نفسك من عشرة بالجدية بحياتك ؟',' سؤال دايم تتهرب من الاجابة عليه',' اطول مدة قضيتها بدون اكل ؟',' أكثر مشاكلك بسبب ؟',' قبل ساعة، ماذا كنت تفعل ؟',' كلمة تقولها لـ بعض الاشخاص في حياتك',' لو أتيحت لك الفرصة للجلوس مع شخص غايب عنك، مَن ستختار؟','نظام نومك ',' ما هي الشخصية المُستفزة بالنسبة لك ؟',' كيف تعرف اذا هذا الشخص يكذب ولا لا ؟',' شخص تحبه ','@منشن : شخص تشوفه نفسية ',' مين جالس عندك ؟',' تنام بـ اي مكان ، ولا بس غرفتك ؟',]

let randomElement4 = list7[Math.floor(Math.random()*list7.length)]
        
console.log(randomElement4)

const listms = ['مساء الرمان شو مالو قلبي وجعان','مساء الديسباسيتو شعرك حرير ولا مسشوريتو','مساء الباتنجان، ممكن بوسة ولا خجلان؟ 🐸','مساء الخوخ ممكن صورتك عشان ادوخ','مساء التفاح يمكن بحبك ارتاح. 😂😂','مساء البصل ممكن نسى يلي حصل',' مساء الحنان ممكن العنوان ؟','مساء القنابل ممكن نتقابل ؟','مساء الأناقة ممكن طلب صداقة ؟','مساء الغرام ممكن الإنستجرام ؟','مساء العطور ممكن تتفضلي معايا علي السحور ؟',' مساء الورد شعرك طبيعي ولا فرد ؟','مساء الخير هو إنتي اللي بتعمليه في قلبي ده فير ؟','مساء البندورة للناس الأمورة ','مساء الكعك في مجال نحكي معك؟','مساء الحلوين ممكن تردين؟','مساء التفكير ممكن نحكي كتير؟','مساء الشمام ممكن تقلب وجهك تنام؟','مساء الكباب ممكن السناب ؟','مساء المشمش ممكن ندردش ؟','مساء الغطس ممكن الواطس ؟','مساء السكر يلي عليك الباب مسكر','مساء النور يا احلا ماتكون',]

let randomElementms = listms[Math.floor(Math.random()*listms.length)]
        
console.log(randomElementms)

const listsb = ['صباح الفراولة ممكن محاولة','صباح الحنان ، ممكن العنوان ؟','صباح الأناقة ، ممكن طلب صداقة ؟','صباح الكنادر .. ممكن نتعرف والا أغادر','صباح العناب ممكن السناب ؟؟🐸🐸','صباح الحنيه ممكن نتعرف ع الحراميه','صباح الشيك شآك شوك ممكن تديني الفيس بوك ؟','صباح الغرام ، ممكن الإنستجرام ؟','صباح الورد ، شعرك طبيعي ولا فرد ؟','صباح الخير ، هو إنت اللي بتعمله في قلبي ده فير ؟','صباح الفرواله يكفيني شرف المحاوله','صباح الهنا مني انا 😉','صباح التوت يا حلو يا كيوت','صباح التفاح للي له قلبي يرتاح ','صباح البرتقال للي دايم علي البال','صباح الشمام ممكن تقلب وجهك تنام','صباح الكعك في مجال نحكي معك','يا صباح الخوخ أديني رقمك لحسن أدوخ','مسار الفل على قلبك جاي أطل','صباح البطاطا للناس الي تتعاطى','صباح الزبادي يا معذب فؤادي مُفتقدني ولا عادي','صباح الزبادي يا معذب فؤادي بتحبني ولا عادي',]

let randomElementsb = listsb[Math.floor(Math.random()*listsb.length)]
        
console.log(randomElementsb)

const listمصعب = ['ولكمممممم يا مصعبببب', '', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

let randomElementمصعب = listمصعب[Math.floor(Math.random()*listمصعب.length)]
        
console.log(randomElementمصعب)

const listكز = ['ولكمممممم يا شيريييييييييي', '', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

let randomElementكز = listكز[Math.floor(Math.random()*listكز.length)]
        
console.log(randomElementكز)

const listسلام = ['اهلا ومرحبا وسهلا وكل حاقه','ايها الانسان','ما شاء الله بدري؟','لا يشيخ بدري كان نمت وخلاص','معلش بس النفسيه بطاطس شويا','تعال نسوي لك زفه ع كيف كيفك','وحشتني جدا جدا','بس اسمع تعال نسحب ع بث بابا تركي ونروح ندشر سوا','اسمع انا جيعان عندك حليب وكيك؟','ياخي فقعت عيني بنورك اتقي الله','ياحظك عنبه تشان ترحب فيك شخصيا !!!','اب اب اب اش الكشخه والحضور الرهيب ذا','تو مانور بثنا وينك عنا من زمان ؟','احس حبيتك عادي ابلعك؟',]

let randomElementسلام = listسلام[Math.floor(Math.random()*listسلام.length)]
        
console.log(randomElementسلام)

const listeiad = [' ايودي', 'ابو طوطو', 'ابو طارق','تكسبر','ايااااد',' تي اكس بي ',]

let randomElementeiad = listeiad[Math.floor(Math.random()*listeiad.length)]
        
console.log(randomElementeiad)

const listترحيب = ['ارحب يا', 'اخبارك يا', 'الموووت تو ما نور البث يا','منوررررررر يا',' ولكمممم يا','يا اهلا و سهلاً يا',]

let randomElementترحيب = listترحيب[Math.floor(Math.random()*listترحيب.length)]
        
console.log(randomElementترحيب)

const list9 = ['ترى حش فيك',' ترى عازمك' ,' لابقين لبعض ',' يقول انك حلوه ',' يكرهك ', 'يحبك بس مستحي يعترف' , 'تراه ثقيل دم' ,' تراه فرفوشي راعي نكت' ,' ترى حكواتي' , 'انتم افضل اصدقاء' ,' ماتنفعوا تكلموا بعض' ,' ترى هذا حلو ',' تراه راعي خراب وخر عنه نصيحه بوت',]

let randomElement9 = list9[Math.floor(Math.random()*list9.length)]
        
console.log(randomElement9)

const list8 = ['تعال نروح ديسكو سوا','يا حلو عازمك على اسكريمة على حساب امي',' ياحلو ممكن سناب؟','تعال نشرب عصير تفاح سوا','يلا نروح البحر والشوي علية','زرفت تذكرتين حق ماما وبابا يلا نروح سوا',' ماودك تصمت قليلًا ',' ياخي هالشخص محنك ',' ترى إشتقنا ',' يابيبي تعشيت؟ ',' معي فصفص معاك شاي؟ ',' تروح افر البولي فر ؟ ',' في معركة رجل ل رجل من المنتصر',' عازمك على ستيك على حساب ',' ايه تقول ياحلوتي كيف كان يومك؟ ',' ياخي انت فنان ',' الحين جد جد عندي سؤال انت ليه حلو؟ ',' قالوا ترى مالك امل ……. ',' ليه ماتتابع حساب ماما في تويتر؟ ',' هل نحن وحدنا؟ ',' ودي اتنكس وانت؟ ',' وش رايك ب  ','   ارسل رقمك ويسبر عشان عندي موضوع معاك ','عندك حليب مقطر؟',' احس ماحبيتك',' احس حبيتك شويا ',' تتوقع انا بنت ولا ولد؟ ',' هااي اخترتك عشان تعاركني ف عاركني حالا ',' هيه انت تحب الطماطم ولا الجزر؟ ',' ابغا اكل باستا سويلي ',' لو خيروك تكون حواجب ماما خديجه ولا جبهه بابا تركي اش راح تختار؟ ',' تحبني ولا تحبني؟ ',' عندك ماسكات؟ خلصو ماسكاتي انا حزينه ',' هاي انا عنبه تشااان~ ',' ماما دايم تحذرني منك ',' انت خفاش؟ ',' احس وضعك مشكوك فيه صراحه',' متى اخر مرا بكيت؟ ',' ابغا ابكي عندك شي ابكي عليه؟ ',' انا حزينه احتاج مواساه',' بيو بيو طخيتك سوي نفسك ميت','احس انتو الاثنين تهاوشو قدامي ابغا اضحك','اسمعو انتو تعرفون بعض؟','اش رايكم نصير الاصدغاء الثلاثه؟','يقول انك كريه شويا','يقول انك افضل ما رأته عيناه ','ترا قال لي انك بكايه','ترا ذا يقول انك عسل عسل','ترا هذا ناوي عليك يبغا يشرشحك','ترا يقول انك دجاجه',]

let randomElement8 = list8[Math.floor(Math.random()*list8.length)]
        
console.log(randomElement8)

const list3 = [' افف', '  خذ و اسكت', '   جالس احط ميكياج ل امي','   افف ريحتك حلوه ','  انا متخبي',' همممم انت لذيذ',' هااااااي',' تعال ارقص',' انا ماسويت شيء',' اخيرا ',' تبي اعلم؟',' ماما شوفيه ',' يازينك',' انا مستعجل',' ابد ما يزعل ',' انا مستعجل',' همممم',' انا مسكين ','  احس يخوف أو شي',' انا مسكين ',' ترى اشوفك ',' انا جيعان لحد يكلمني','   أستاذنكم','  اسلم ','   ارقص',' يالليل',]

let randomName = list3[Math.floor(Math.random()*list3.length)]
        
console.log(randomName)

const listمدح = ['أنا فخورُ بإبداعك','شكراً لوجودك ضمن بثنا فأنت هبة من الله لنا','أنت حقاً جوهرة من الإبداع أتمنى أن تظل مبدعاً إلى الأبد','أنت شخص رائع أكثر مما تدرك','كم نحن محظوظون بوجود شخص لديه أفكار مبتكرة مثلك بيننا','عندما نبحث عن كلمات الشكر والتقدير تعجز الكلمات عن وصف ما نشعر به وتجف الأقلام قبل أن نكتب لك رسالة شكر وثناء','ما أروع العمل مع شخص مبدع مثلك لا يستسلم حتى يحقق أهدافه','لقد حاولت صياغة عبارات مدح عديدة لثنائك وشكرك على ما قدمت لنا ولكنك تجاوزت كل تلك العبارات','أجمل عبارات الشكر والعرفان لا بد أن تسبق حروفي وتنهي السطور المعبرة عن صدق المعاني النابعة من قلبي لك','كيف يكون لديك دائماً أفضل الأفكار الإبداعية، ياله من شئ رائع أن يكون إبداعك ليس له حدود','أحب طريقة تفكيرك للغاية، لا بد أن نطبق أفكارك الإبداعية على أرض الواقع، لقد أنعم الله عليك بأقصى قدر من الإبداع','أنا حقاً أحب الحديث معك فهو يفتح لي آفاقاً جديدة للتفكير','يسعدنا دائماً أن نرى نجاحك أنت حقاً تستحق ذلك','كم نحن فخورين بالنجاح الذي تحققه','لقد ساعدتنا مهاراتك الرائعة في حل مشكلاتنا والوصول إلى أهدافنا بسرعة أكبر','أتوقع لك الوصول إلى قمة النجاح فدائماً أندهش من عملك الجاد وتفانيك في أداء العمل','الإبداع في أداء عملك لم نرى مثيلاً له من قبل في بثنا','المبدع الوحيد الذي أكون سعيداً بالاطلاع على عمله هو أنت','مازلت قادراً على تقديم عمل مميز','أنت مصدر إلهام للأخرين','كم هو جميل التحدث مع شخص مبدع مثلك فأنت دائماً تنظر للحياة من منظور مختلف ومميز','لا شك أن العمل معك شئ رائع','يا لك من شخص قادر على تحقيق نتائج مبهرة رغم وجود الكثير من الأزمات شكراً لك','إن الأحرف التي باتت كلمات والكلمات التي باتت جمل فقدت كل عبارات الجمال في سبيل جمال ما تقدمه لنا','إلى صاحب أعظم مهنة وحامل أعظم رسالة كل عبارات المدح وقصائد الشكر لا تفي حقك','أنت أكثر شخص مبدع قابلته على الإطلاق','Wow, that’s how you create Very inspiring',]

let randomElementمدح = listمدح[Math.floor(Math.random()*listمدح.length)]
        
console.log(randomElementمدح)

const listسته = ['@6_iqp هلا هلا سته ','@6_iqp هلا هلا طقب','@6_iqp اهلا عطب','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

     let randomElementسته = listسته[Math.floor(Math.random()*listسته.length)]
        
      console.log(randomElementسته)

      const listفصول = ['ندعمك فصووللل @f_q8_x','تراك غثيتنا فصول','','', '','','','','', '','','','','', '','','','','', '','','','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','','','', '','','','','', '','','','','', '','','','','',]

      let randomElementفصول = listفصول[Math.floor(Math.random()*listفصول.length)]
         
       console.log(randomElementفصول)

      const listso = ['!sr https://music.youtube.com/watch?v=Xi1SmdBvJ5U&feature=share', '!sr https://www.youtube.com/watch?v=EgT_us6AsDg&pp=ygUMc2VsZW5hIGdvbWV6', '!sr https://youtu.be/I4rtcJnRd6s','!sr https://www.youtube.com/watch?v=J6Ygf4pGcjo','!sr https://www.youtube.com/watch?v=v1miNcZiw74&list=RDGrUky4ZTVmE&index=26','!sr https://music.youtube.com/watch?v=zlF-KFWf6c4&feature=share',]

      let randomElementso = listso[Math.floor(Math.random()*listso.length)]
              
      console.log(randomElementso)

      const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

      let randomElement = list2[Math.floor(Math.random()*list2.length)]
              
      console.log(randomElement)

 /* const listbits = [`و اخيرًا ابو صنادح بيشتري لي بندق  `,`لقد أضفت الكثير لحياتي، !`,`أشكرك على كرمك وسخاءك!`,`لقد أدخلت السعادة على قلبي، !`,`تقديري لك وشكري العميق!`,`أشكر الله على وجودك في حياتي!`,`شكرًا لكل المجهود الذي بذلته!`, `لقد جعلت يومي أفضل، !`,`مليت وانا اطلب من بابا يشري لي سوني 5 ويقول ماعنده😢.. الله يسعدك يا  على الدعم بتساعدني على اقناع بابا 😘`,` ماما خديجة ازعجتنا وهي تبي مكنسة روبوتية 🧹😒، بهذا الدعم ساعدتنا اننا نسكتها ونجيب لها المكنسة شكرا لك والله يسعدك 🥰`,` اخيييرا بهذا الدعم اقدر اقنع بابا يشري لي بي سي مثل حقه ابي ابدأ ابث مثله 😭، شكرا الله يكثر خيرك 🥹`,` شكرًا لك على إسعادي وجعل يومي أفضل`,`لا أعرف كيف أعبر عن شكري لك`,` أنا ممتن لحسن قلبك وسخاءك`,` شكرًا لك على مساعدتي ودعمي`,`أنا ممتن لكل شيء قدمته لي دون مقابل`,` أشعر بالامتنان والشكر لكل ما تفعله لي`,`شكرًا لك على إدخال السعادة والفرح إلى حياتي`,`لا يمكنني أن أعبر عن شكري الكبير لك بكلمات`,`شكرًا لك على كل المجهود الذي بذلته من أجلي`,` لقد أدخلت النور والسعادة إلى حياتي`,` شكرًا لك على تقديم الدعم والمساندة اللازمة`,`شكرًا لك على إدخال الأمل والتفاؤل إلى حياتي`,`شكرًا لك على إسعادي وجعلني أشعر بالأمان والراحة`,`لا يمكنني أن أعرف كيف أعيش دون ما قدمته لي`,`شكرًا لك على الوقت والجهد الذي قدمته لي`,` أشعر بالامتنان والشكر لكل ما قدمته لي من قبل`,`شكرًا لك على إظهار الصدق والإخلاص في علاقتك معي`,`لا يمكنني الاستغناء عن ما قدمته لي في أوقات الحاجة`,]

 let randomElementbits = listbits[Math.floor(Math.random()*listbits.length)]
              
 console.log(randomElementbits) */

 /* setInterval(function () {
    getRandomViewer("herodevil777").then(randomuser => {
        console.log(client.say(channel, ` ${list8[Math.floor(Math.random()*list8.length)]} @${randomuser} `))
    })
},600000);

setInterval(function () {
    getRandomViewer("herodevil777").then(randomuser => {
    getRandomViewer("herodevil777").then(randomuser0 => {
       console.log(client.say(channel, ` @${randomuser0} ${list9[Math.floor(Math.random()*list9.length)]} @${randomuser} `))
    })})
},863000); */

 /* client.on('connected', () => {
    client.say(channel, `السلام عليكم عنب جاء   `);
 }); */

client.on('message', (channel, user, message, self) => {
    if(self) return;

    const firstWord = message.split(' ')[0]; // Get the first word of the message
      
   //console.log(channel,`The first word of the message is: ${firstWord}`);
   
   const cat = message.split(' ');
   const cat1 = message.split(' ')[1];
   const cat2 = message.split(' ')[2];
   const cat3 = message.split(' ')[3];
   const cat4 = message.split(' ')[4];
   const cat5 = message.split(' ')[5];
   const cat6 = message.split(' ')[6];
   const cat7 = message.split(' ')[7];
   const cat10 = message.split(' ')[10];
   //client.say(channel,` ${cat}`);

    var args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    const userChoice = message.toLowerCase();
    const username = user["display-name"]
    const badges = user.badges
    const isMod = user.mod || (badges && user.badges["broadcaster"])
    if (command == 'prediction' && isMod) {
        args = args.join(" ")
        args = extractArgs(args);
        console.log(args)
        if (!args) {
            client.say(channel, `@${username} you didn't precise any arguments, please try again!`)
            return 0;
        }

        if (args.length < 4) {
            client.say(channel, `@${username} you need at least 4 arguments to start a prediction!`);
            return 0;
        }

        if (args.length > 12) {
            client.say(channel, `@${username} too many arguments (max of 12)`)
            return 0;
        }

        if (!Number.isInteger(+args[args.length - 1]) || args[args.length -1] == "0") {
            client.say(channel, `@${username} make sure you well precise a non-zero duration (in seconds)!`)
            return 0;
        }

        // args = [x.split("( )") for (x of )]
        // console.log(args.join(" ").split(/\s*(?![^()]*\))/))
        // args = args.join(' ')
        //                 .split( /\s*(?![^()]*\))/)
        //                .map(x => x.replace(/[()]/g, ''));
        url = 'https://api.twitch.tv/helix/predictions'
        title = args[0]
        outcomes = args.slice(1, -1).map(arg => ({title : arg}))
        prediction_window = +args[args.length - 1]
        getUser("txb_r").then((data) => {
            channel_id = data["data"][0].id
            body_params = {
                'broadcaster_id': channel_id,
                title: title,
                outcomes: outcomes,
                'prediction_window': prediction_window
            }
        fetch(url, {
            method: 'POST',
            headers: headers_2,
            body: JSON.stringify(body_params)
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data["data"]) {
                    client.say(channel, `@${user.username}, prediction "${title}" started successfully!`)
                } else {
                    client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`)
                }
            }).catch(error => client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`));
        })
    }

    if(firstWord == 'say') {
        if(username == 'txb_r') {
            const response = message.slice(4); // استخراج الجزء بعد 'say '
            client.say('#herodevil777', response);
    } else {
        client.say(channel,`@${user.username} ما اسمع الا من البق بوس`)
    }
}

if(firstWord == 'luck') {
    if(username == 'txb_r') {
    const choces = ['1', '2', '3'];
    
    function getRandomChoice() {
      const randomIndex = Math.floor(Math.random() * choces.length);
      return choces[randomIndex];
    }
    
    function determineWinner(userChoice, computerChoice, eid) {
        if (
            (userChoice === '1' && computerChoice === '1' && eid === '1') ||
            (userChoice === '2' && computerChoice === '2' && eid === '2') ||
            (userChoice === '3' && computerChoice === '3' && eid === '3')
          ) {
            return 'You win!';
          } else {
            return 'Try again';
          }
        }
    
    
    client.on('message', (channel, userstate, message, self) => {
      if (self) return;
    
      const sender = userstate.username;
      const userChoice = message.toLowerCase();
    
      if (choces.includes(userChoice)) {
        const computerChoice = getRandomChoice();
        const eid = getRandomChoice();
        const result = determineWinner(userChoice, computerChoice, eid);
        client.say(channel, `@${sender} ${userChoice} ,${computerChoice} ,${eid} ${result}`);
      } 
    
    })} else { const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

    let randomElement = list2[Math.floor(Math.random()*list2.length)]
            
    console.log(randomElement)
            client.say(channel, ` ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} @${user.username} `);
        }
};

/* function getRandomChoice2() {
    const randomIndex2 = Math.floor(Math.random() * list2.length);
    return list2[randomIndex2];
  }

function emot(a, b, c) {
    if (
        (a === 'herodevil8nf4' && b === 'herodevil8nf4' && c === 'herodevil8nf4') ||
        (a === 'herodevilAKAFBI' && b === 'herodevilAKAFBI' && c === 'herodevilAKAFBI')  ||
        (a === 'herodevilGutiar' && b === 'herodevilGutiar' && c === 'herodevilGutiar')   ||
        (a === 'herodevil77dance' && b === 'herodevil77dance' && c === 'herodevil77dance')  ||
        (a === 'herodevilMst83d' && b === 'herodevilMst83d' && c === 'herodevilMst83d')  ||
        (a === 'herodevilT8HO' && b === 'herodevilT8HO' && c === 'herodevilT8HO')  
      ) {
        return 'We have a winner We will register your name in the list of winners';
      } else {
        return 'Try again';
      }
    }

    if(firstWord == 'حظي؟') {
        const a = getRandomChoice2();
        const b = getRandomChoice2();
        const c = getRandomChoice2();
        const result2 = emot(a, b, c);
        client.say(channel, `@${user.username} ${a} ${b} ${c} ${result2}`);
    } */

/* if (cat4 == 'title') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير العنوان')
}}

if (cat4 == 'game') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير القيم ')
}} */

if (firstWord == 'عاركني') {
    const list3a = [`${cat1}`,`@${user.username}`]
   
        let randomElement3a = list3a[Math.floor(Math.random()*list3a.length)]
           
         console.log(randomElement3a)
        client.say(channel, `الفائز هو ${list3a[Math.floor(Math.random()*list3a.length)]}  `)
}

/* client.on('message', (channel, userstate, message, self) => {
    if (self) return; // Ignore messages from the bot itself
  
    if (message === '!randomviewer') {
      const viewers = client.getUsers(channel);
      const randomViewer = Math.floor(Math.random() * viewers.length);
      client.say(channel, `The random viewer is ${viewers[randomViewer].username}!`);
    }
  }); */
    
/* if(cat == 'عليكم') {
    client.say(channel, `هردفل الاغوى`)
} */

    if(firstWord == 'رحب') {
        if(username == 'txb_r') {
        client.say(channel,`ارحب يا ${cat2} تو ما نور البث herodevilT8HO  `)
    } else {
        client.say(channel,`يا اهلًا و سهلًا منورين جميعًا`)
    }
    }

    if(firstWord == 'صباح') {
        client.say(channel, ` ${listsb[Math.floor(Math.random()*listsb.length)]} @${user.username} `)
    }

    if(firstWord == 'مساء') {
        client.say(channel, `${listms[Math.floor(Math.random()*listms.length)]} @${user.username}  `)
    }

    /* if(username == `mugiwara911`) { 
        const listمم = [``, '','','', '','','','','','','','',]
   
        let randomElementمم = listمم[Math.floor(Math.random()*listمم.length)]
           
         console.log(randomElementمم)
        client.say(channel, `${listمم[Math.floor(Math.random()*listمم.length)]}  `);
    } */

    if(message == 'hello') {
        client.say(channel, `@${user.username}, hello!`);
    }

    if(message == '!لعبة') {
      client.say(channel, `@${user.username}  في العاب واجد {(حظي؟),(حجرة ورقة مقص),(!كلمة,!start,!anime),(!startgame),(!randomnumbers) و الكثير و الكثير من اللعاب و اذا تبي تظهر اسماء الفائزين استعمل !list} `);
  }

    if(username == 'cherryy__777') {
        client.say(channel, ` ${listكز[Math.floor(Math.random()*listكز.length)]}  `);
    }

    if(username == 'imosabx7') {
        client.say(channel, ` ${listمصعب[Math.floor(Math.random()*listمصعب.length)]}  `);
    }

    if(username == '6_iqp') {
        client.say(channel, `${listسته[Math.floor(Math.random()*listسته.length)]} `);
    }

    if(username == 'f_q8_x') {
      client.say(channel, `${listفصول[Math.floor(Math.random()*listفصول.length)]} `);
  }

    /* if (username.toLowerCase() === 'nightbot') return;
        
        const listmod = [`@${user.username} ${list8[Math.floor(Math.random()*list8.length)]} `, '','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '',]
   
        let randomElementmod = listmod[Math.floor(Math.random()*listmod.length)]
           
         console.log(randomElementmod)
   
           client.say(channel, ` ${listmod[Math.floor(Math.random()*listmod.length)]}  `); */
    

    if (cat2 == 'SUB') {
        if (username == 'txb_r') {
            client.say(channel,`شكرا على القفت ل @${cat4} يا (@${cat10} كثر الله خيرك`)}
            if (username == 'WizeBot') {
                client.say(channel,`شكرا على القفت ل @${cat4} يا (@${cat10} كثر الله خيرك`)}
            }

            if (cat1 == 'RE-SUB') {
                if (username == 'txb_r') {
                    client.say(channel,`شكرا على الاشتراك يا @${cat3}`)}
                    if (username == 'WizeBot') {
                        client.say(channel,`شكرا على الاشتراك يا @${cat3}`)}
                    }

                    if (cat6 == 'subscriptions') {
                        if (username == 'txb_r') {
                            client.say(channel,`شكرا على القفت ل  ${cat5} اشخاص  يا @${cat1}`)}
                            if (username == 'WizeBot') {
                                client.say(channel,`شكرا على القفت ل ${cat5} اشخاص يا @${cat1}`)}
                            }

            if (firstWord == '👤') {
                if (username == 'txb_r') {
                    client.say(channel,`شكرا على الفولو يا @${cat4}`)}
                    if (username == 'WizeBot') {
                        client.say(channel,`شكرا على الفولو يا @${cat4}`)}
                    }
                    
                    
                    if(username == 'herodevil777') {
                        const listتركي = [` وش تبي انت ركز على بثك @herodevil777`, '','','', '','','','','','','','','','', '','','','','', '','','','','', '','','','','', '', '','','', '','','','','','','','','','', '','','', '','','','','','','','','','',]
   
        let randomElementتركي = listتركي[Math.floor(Math.random()*listتركي.length)]
           
         console.log(randomElementتركي)
        client.say(channel, `${listتركي[Math.floor(Math.random()*listتركي.length)]}  `);
    }

    if(message == 'ارقص عنب') {
        if(username == 'txb_r') {
            client.say(channel, `herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar `);
            client.say(channel, `herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar  herodevilGutiar `);
            
            setTimeout(function () {
    
                console.log(client.say(channel, `herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance `))
                console.log(client.say(channel, `herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance  herodevil77dance `))
            
        },6000);
        } else {
            client.say(channel,`@${user.username} مب رقاصه عندك انا`)
        }
        
         }
         
         if(firstWord == 'برب') {
            const listبر = [`@${user.username} خذ راحتك يا قلبي `,`@${user.username} تيت`,`@${user.username} في امان الله`,]
    
    let randomElementبر = listبر[Math.floor(Math.random()*listبر.length)]
            
    console.log(randomElementبر)
            client.say(channel, ` ${listبر[Math.floor(Math.random()*listبر.length)]}`);
        }
            
    if(firstWord == 'باك') {
        client.say(channel, `@${user.username} ولكم باك احسن من يرجع `);
        if(username == 'txb_r') {
            client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
        }
    }

    if(message == 'احبك عنب') {
        client.say(channel, `@${user.username}, انا احبكم بعد herode3Heart `);
    }

    if(firstWord == 'عنفني') {
        client.say(channel, `!timeout  @${user.username} 1`);
    }

    if(firstWord == 'عنف') {
        if(username == 'txb_r') {
        client.say(channel, `!timeout ${cat1}  1`);
    } else if(username == 'EIADz_88') {
        client.say(channel, `!timeout ${cat1}  1`);
    }}

    if(firstWord == 'احس') {
        client.say(channel, `@${user.username}, ياليييل انت و احساسك herodevil1  `);
    }

    if(firstWord == 'عنبي') {
        client.say(channel, `@${user.username} عيون عنب المدورة 🐹🍇`);
    }

    if(firstWord == 'عنب؟') {
        client.say(channel, `@${user.username} 🐹🍇هلا , انا عنب ولد تركي وخديجة دايم أكون بالبث وصديق الشات الصدوق`);
    }

    if(firstWord == 'عنوب') {
        client.say(channel, `لا تشغلوني قاعد اكل 🤌🏻`);
    }

    if(message == 'وين عنب') {
        client.say(channel, `@${user.username},في الحمام`);
    }

    if(message == 'عنب تحبني؟') {
        client.say(channel, `احب ماما وبابا بس 🐹`);
    }

    if(firstWord == 'كيفك') {
        client.say(channel, `@${user.username}, بخير `);
    }

    if(firstWord == 'اخباركم ') {
      client.say(channel, `@${user.username}, بخير يامال الخير بشرنا عنك `);
  }

    if(message == ' وش تكره عنب؟') {
        client.say(channel, `الشمس - بابا اذا تفل - اسكانور - الي ما يسوي فولو `);
    }

    if(message == 'ابو جبهة') {
        client.say(channel, `@${user.username} اوه قصدك بابا؟ 🐹`);
    }

    if(firstWord == 'شرايك') {
        client.say(channel, `@${user.username} مو مهتم صراحة 🐹 `);
    }

    if(message == 'عطنا حكمة') {
        client.say(channel, `@${user.username} 🐹😜 مافي` );
    }

    if(firstWord == 'مود') {
        client.say(channel, `@${user.username} كل  المود فاهين و اولهم ابو جبهة `);
    }

    if(firstWord == 'امدحني') {
        client.say(channel, `@${user.username} ${listمدح[Math.floor(Math.random()*listمدح.length)]} `);
    }

    if(firstWord == 'تربص') {
        client.say(channel, `@${user.username} تخليني لحالي  `);
    }

    if(message == 'وش تاكل عنب') {
        client.say(channel, `@${user.username} كباب ب الشكلاطه  `);
    }

    if(firstWord == '!roll') {
        client.say(channel, `@${user.username} the number is ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1}`);
    }

    /* if(message == 'حظي؟') {
        const list2 = ['herodevil8nf4 ', 'herodevilAKAFBI ', 'herodevilGutiar ','herodevil77dance  ','herodevilMst83d ','herodevilT8HO ',]

let randomElement = list2[Math.floor(Math.random()*list2.length)]
        
console.log(randomElement)
        client.say(channel, ` ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} @${user.username} `);
    } */

    if(firstWord == 'اكل؟') {
        client.say(channel, `@${user.username} ${list1[Math.floor(Math.random()*list1.length)]} `);
    }

    if(firstWord == 'نطلع؟') {
        client.say(channel, `@${user.username} ${list4[Math.floor(Math.random()*list4.length)]} `);
    }

    if(firstWord == 'تتحدى؟') {
        client.say(channel, `@${user.username} ${list5[Math.floor(Math.random()*list5.length)]} `);
    }

    if(firstWord == 'شرب؟') {
        client.say(channel, `@${user.username} ${list6[Math.floor(Math.random()*list6.length)]} `);
    }

    if(firstWord == 'سؤال؟') {
        client.say(channel, `@${user.username} ${list7[Math.floor(Math.random()*list7.length)]} `);
    }

    if(message == 'عنب قفل') {
        if(username == 'txb_r') {
        
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else if(username == 'Rraed_') {
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else if(username == 'herodevil777') {
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        } else {
            client.say(channel,`@${user.username} دز دز تبي تصرفن `)
    }} 

    /* if (firstWord == '✔️') {
        if (username == 'txb_r') {
    setInterval(function () {
        console.log(client.say(channel, ` ذا الجدول الايام الجايه ( السبت : سوالف و لعب || الاحد : انميات الموسم || الاثنين : سوالف و لعب وفيلاند || الثلاثاء : ايبو || الاربعاء : سوالف و لعب || الخميس : ايبو || الجمعه : ايبو ) وشكرا لكم   `))
    
    },600000);
}
if(username == 'WizeBot') {
    setInterval(function () {
        console.log(client.say(channel, ` ذا الجدول الايام الجايه ( السبت : سوالف و لعب || الاحد : انميات الموسم || الاثنين : سوالف و لعب وفيلاند || الثلاثاء : ايبو || الاربعاء : سوالف و لعب || الخميس : ايبو || الجمعه : ايبو ) وشكرا لكم   `))
    
    },600000);
}} */

/* if (firstWord == '❌') {
    if(username == 'txb_r') {
        client.say(channel,`  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }
    if(username == 'WizeBot') {
        client.say(channel,`  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }} */
    /* if (firstWord == '✔️') {
        if (username == 'txb_r') {
            setTimeout((ab) => {
                console.log(client.say(channel,"هذا شيء بيني وبينكم للاخرة واحب الاعمال الى الله سرور تدخله على مسلم ( https://ehsan.sa/housing/details/190 ) والدال على الخير كفاعله ومانقص مال من صدقه و انوي فيها صدقة لك ولغيرك و جزاكم الله خير مقدما "));
              }, 6000);
              
            }
        if(username == 'WizeBot') {
            const timeoutID = setTimeout(() => {
                console.log(client.say(channel,"هذا شيء بيني وبينكم للاخرة واحب الاعمال الى الله سرور تدخله على مسلم ( https://ehsan.sa/housing/details/190 ) والدال على الخير كفاعله ومانقص مال من صدقه و انوي فيها صدقة لك ولغيرك و جزاكم الله خير مقدما "));
              }, 6000);
        }
    }
    if (firstWord == '❌') {
        if(username == 'txb_r') {
            client.say(channel,`lilfokaBlueheart  يلا استاذنكم في امان الله`)
            setTimeout(function () {
                clearTimeout(ab);
                },2000);
    }
        if(username == 'WizeBot') {
            client.say(channel,`lilfokaBlueheart  يلا استاذنكم في امان الله`)
            setTimeout(function () {
            clearTimeout(timeoutID);
                },2000);
        }} */

    /* getRandomViewer("herodevil777").then(async randomuser => { */

    /* if(message == "عشاء؟") {
      client.say(channel, `@${randomuser} يبي يتعشى معك @${user.username}`);
    }

    if(message == "كف؟") {
        client.say(channel, `@${randomuser} سطرك كف  @${user.username}`);
      }

      if(message == "افطار؟") {
        client.say(channel, `@${randomuser} يبي يفطر معك @${user.username}`);
      }

    if(message == "زواج؟") {
        client.say(channel, `في رمضان @${user.username}`);
      }

     if(message == "سلام؟") {
        client.say(channel, `@${randomuser} يسلم عليك @${user.username}`);
      } */

    if(firstWord == 'لغز؟') {
        client.say(channel, ` اوجد ${list20[Math.floor(Math.random()*list20.length)]} (${list30[Math.floor(Math.random()*list30.length)]}) `);
    }
        
        if(firstWord == 'السلام')  {
            if(username == 'txb_r') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            } else { client.say(channel, ` وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]} @${user.username}`);
            
        }}

        
        if(firstWord == 'سلام') {
            if(username == 'txb_r') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            } else { client.say(channel, `وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]} @${user.username}  `);
            
        }}

        /* if (message.includes('عنب'!== 'nightbot')) {
            client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]} `);
        }
        if (message.includes('@3nb77'!== 'nightbot')) {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
        } 
        if (message.includes('@3NB77'!== 'nightbot')) {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
         }  */

         if(firstWord == 'عنب') {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
      }
      if(firstWord == '@3nb77') {
          client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
      }
      if(firstWord == '@3NB77') {
        client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
    }

        /* if(firstWord == 'عنب') {
            client.say(channel, ` نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username} `);
        }
        if(firstWord == '@3nb77') {
            client.say(channel, `نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username}  `);
        }
        if(firstWord == '@3NB77') {
          client.say(channel, `نعم اخوي انا خارج التغطيه كلمني مره ثانيه NotLikeThis @${user.username}  `);
      } */

        if(message == 'كوماند؟') {
            client.say(channel, `@3NB77 - عنب - لغز؟ - سؤال؟ - شرب؟ - تتحدى؟ - نطلع؟ - اكل؟ - حظي؟ - وش تاكل عنب - امدحني - مود - عطنا حكمة - شرايك - ابو جبهة - وش تكره عنب؟ - عنب تحبني؟ - وين عنب - عنوب - عنب؟ - عنبي - احس - عنفني - عاركني - احبك عنب -  و الكثير و الكثير من الكماندات `);
        }

        if(firstWord == 'اغنيه') {
            client.say(channel, ` ${listso[Math.floor(Math.random()*listso.length)]}`);
        }

        if(firstWord == '!دخل' && user.username === 'txb_r') {
          winnersList.push(cat1);
          client.say(channel,'ok boss')
        } 
        
});

/* client.on('whisper', (from, userstate, message, self) => {
   
    client.whisper(follower, 'شكرا للمتابعة! أتمنى أن تستمتع بالبث!');
}
); */

/* const TwitchAPI = require('twitch-api');
const api = new TwitchAPI({
    clientId: '6k29rg19rge0e7xpzj8z1lsh4r8cpf',
    clientSecret: '5ocoo5oui36m0x5uvjdfue8ja019qe',
});

api.getChannel('herodevil777').then(channel => {
    console.log(`The channel ${channel.display_name} has ${channel.followers} followers.`);
}).catch(err => {
    console.error(err);
});

api.getMessages('herodevil777').then(messages => {
    messages.forEach(message => {
      console.log(`${message.from} said: ${message.text}`);
    });
  }).catch(err => {
    console.error(err);
  }); */


client.on('cheer', (channel, userstate) => {
    const bits = userstate.bits;
    const username = userstate['display-name'];
    
    if(bits) {
        const listbits = [`و اخيرًا ابو صنادح بيشتري لي بندق  `,`لقد أضفت الكثير لحياتي، !`,`أشكرك على كرمك وسخاءك!`,`لقد أدخلت السعادة على قلبي، !`,`تقديري لك وشكري العميق!`,`أشكر الله على وجودك في حياتي!`,`شكرًا لكل المجهود الذي بذلته!`, `لقد جعلت يومي أفضل، !`,`مليت وانا اطلب من بابا يشري لي سوني 5 ويقول ماعنده😢.. الله يسعدك يا @${username} على الدعم بتساعدني على اقناع بابا 😘`,` ماما خديجة ازعجتنا وهي تبي مكنسة روبوتية 🧹😒، بهذا الدعم ساعدتنا اننا نسكتها ونجيب لها المكنسة شكرا لك والله يسعدك 🥰`,` اخيييرا بهذا الدعم اقدر اقنع بابا يشري لي بي سي مثل حقه ابي ابدأ ابث مثله 😭، شكرا الله يكثر خيرك 🥹`,` شكرًا لك على إسعادي وجعل يومي أفضل`,`لا أعرف كيف أعبر عن شكري لك`,` أنا ممتن لحسن قلبك وسخاءك`,` شكرًا لك على مساعدتي ودعمي`,`أنا ممتن لكل شيء قدمته لي دون مقابل`,` أشعر بالامتنان والشكر لكل ما تفعله لي`,`شكرًا لك على إدخال السعادة والفرح إلى حياتي`,`لا يمكنني أن أعبر عن شكري الكبير لك بكلمات`,`شكرًا لك على كل المجهود الذي بذلته من أجلي`,` لقد أدخلت النور والسعادة إلى حياتي`,` شكرًا لك على تقديم الدعم والمساندة اللازمة`,`شكرًا لك على إدخال الأمل والتفاؤل إلى حياتي`,`شكرًا لك على إسعادي وجعلني أشعر بالأمان والراحة`,`لا يمكنني أن أعرف كيف أعيش دون ما قدمته لي`,`شكرًا لك على الوقت والجهد الذي قدمته لي`,` أشعر بالامتنان والشكر لكل ما قدمته لي من قبل`,`شكرًا لك على إظهار الصدق والإخلاص في علاقتك معي`,`لا يمكنني الاستغناء عن ما قدمته لي في أوقات الحاجة`,]

 let randomElementbits = listbits[Math.floor(Math.random()*listbits.length)]
              
 console.log(randomElementbits)
    client.say(channel,`${listbits[Math.floor(Math.random()*listbits.length)]} وشكرا على ${bits} بتس, يا @${username}`)}
    if(bits == '101') {
        client.say(channel,`حيواواواوواووانااتت herodevil77dance  `)
    }

});

// استدعاء حدث stream-up
client.on('stream-up', (channel, username) => {
    // الكود الذي سيتفعل عند بدء البث
    console.log(`${username} has started streaming on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند بدء البث
    client.say(channel, 'مرحباً بالجميع، تم بدء البث!');
  });
  
  // استدعاء حدث stream-down
  client.on('stream-down', (channel, username) => {
    // الكود الذي سيتفعل عند انتهاء البث
    console.log(`${username} has stopped streaming on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند انتهاء البث
    client.say(channel, 'شكراً لمشاهدتكم جميعاً، تم انتهاء البث!');
  });
  
  // استدعاء حدث stream-change
  client.on('stream-change', (channel, username, status, game) => {
    // الكود الذي سيتفعل عند تغيير حالة البث
    console.log(`${username} has changed their stream status to "${status}" playing ${game} on ${channel}`);
    // هنا يمكنك وضع أي كوماند تريد تنفيذه عند تغيير حالة البث
    client.say(channel, `${username} changed their stream status to "${status}" playing ${game}`);
  });
  
 /*  // الاتصال بخادم تويتش
  client.connect(); */


 /*  let startTime;

  client.on('message', (channel, tags, message, self) => {
    if (message === '!start') {
      startTime = Date.now();
      client.say(channel, 'Timer started!');
    }
  });

  let intervalId;

client.on('message', (channel, tags, message, self) => {
  if (message === '!start') {
    startTime = Date.now();
    intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      client.say(channel, `Elapsed time: ${elapsedTime} seconds`);
    }, 1000);
    client.say(channel, 'Timer started!');
  }

  if (message === '!stop') {
    clearInterval(intervalId);
    client.say(channel, 'Timer stopped!');
  }
}); */


const choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return '3nb wins!';
      }
    }


client.on('message', (channel, userstate, message, self) => {
  if (self) return;

  const sender = userstate.username;
  const userChoice = message.toLowerCase();

  if (choices.includes(userChoice)) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(userChoice, computerChoice);
    client.say(channel, `@${sender}, you chose ${userChoice}, 3nb chose ${computerChoice}. Result: ${result}`);
  } 

});

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

client.on('message', (channel, userstate, message, self) => {
    if (self) return;
  
    if (message.toLowerCase() === '!startgame') {
      const targetNumber = generateRandomNumber();
      client.say(channel, 'لعبة الرقم العشوائي قد بدأت!');
  
      const user = userstate['display-name'];
  
      const gameLoop = async () => {
        client.say(channel, `@${user} اخمن الرقم بين 1 و 10 باستخدام !guess`);
        
        const correctAnswer = targetNumber.toString();
        const userGuessInput = await new Promise(resolve => {
          client.on('message', (channel, userstate, message, self) => {
            if (self) return;
            if (userstate['display-name'] === user && message.startsWith('!guess')) {
              const userGuess = message.split(' ')[1];
              resolve(userGuess);
            }
          });
        });
  
        if (userGuessInput === correctAnswer) {
          client.say(channel, `تهانينا! @${user} لقد فزت! الرقم الصحيح هو ${correctAnswer}`);
          winnersList.push(userstate.username);
        } else {
          client.say(channel, `للأسف! @${user} الرقم الصحيح هو ${correctAnswer}`);
        }
      };
  
      gameLoop();
    }
  });

  client.on('message', onMessageHandler);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function onMessageHandler(target, context, msg, self) {
    if (self) return;
  
    if (msg.toLowerCase() === '!randomnumbers') {
      const num1 = getRandomNumber(1, 3);
      const num2 = getRandomNumber(1, 3);
      const num3 = getRandomNumber(1, 3);
  
      let response;
      let outcome;
  
      if (num1 === num2 && num2 === num3) {
        outcome = 'لقد فزت!';
      } else {
        outcome = 'لقد خسرت!';
      }
  
      response = `الأرقام العشوائية: ${num1}, ${num2}, ${num3}. ${outcome}`;
  
      client.say(target, response);
    }
  }
  
  client.on('message', onMessageHandler2);
  
  /* client.on('connected', (addr, port) => {
    console.log(`تم الاتصال بالبوت على ${addr}:${port}`);
  });
 */
  const winnersList = [];

  function getRandomLetter() {
    /* const alphabet = 'abcdefghijklmnopqrstuvwxyz'; */
    const randomIndex = Math.floor(Math.random() * list2.length);
    return list2[randomIndex];
  }
  
  function onMessageHandler2(target, context, msg, self) {
    if (self) return;
  
    if (msg.toLowerCase() === 'حظي؟') {
      const letter1 = getRandomLetter();
      const letter2 = getRandomLetter();
      const letter3 = getRandomLetter();
  
      let response;
      let outcome;
  
      if (letter1 === letter2 && letter2 === letter3) {
        outcome = 'We have a winner We will register your name in the list of winners';
        winnersList.push(context.username);
      } else {
        outcome = 'Try again';
      }
  
      response = `@${context.username} ${letter1} ${letter2} ${letter3} ${outcome}`;
  
      client.say(target, response);
  } else if (msg.toLowerCase() === '!list') {
    const winners = winnersList.join(', ');
    client.say(target, `الفائزون حتى الآن: ${winners}`);
  } else if (msg.toLowerCase().startsWith('!اطرد')) {
    if(context.username == 'txb_r') {
    const args = msg.split(' ');
    const removeUsername = args[1];

    const index = winnersList.indexOf(removeUsername);
    if (index !== -1) {
      winnersList.splice(index, 1);
      client.say(target, `تمت إزالة ${removeUsername} من القائمة.`);
    } else {
      client.say(target, `${removeUsername} غير موجود في القائمة.`);
    }} else {
      client.say(channel, `@${context.username} مب على كيفك تطرد الناس `);
    } 
  }
} 
  
const targetMessage = 'herodevilAKAFBI';
const targetCount = 5;
let messageCount = 0;
let participants2 = new Set();

client.on('message', (channel, user, message, self) => {
  if (self) return;

  if (message.trim() === targetMessage) {
    participants2.add(user.username);
    messageCount++;

    if (messageCount >= targetCount) {
      // Perform your desired action here
      const participantList = Array.from(participants2).join(', ');
      client.say(channel,`نعم يخوان ابي انام لا تتصلون ${participantList} `);
      // You can replace the console.log with your own action
    }
  }
});

const usersWhoSaidHi = [];

client.on('message', (channel, userstate, message, self) => {
  if (message.toLowerCase().includes('سلام') && !self) {
    const username = userstate.username;
    if (!usersWhoSaidHi.includes(username)) {
      usersWhoSaidHi.push(username);
      console.log(`${username} قال "hi" في الشات.`);
    }
  }
  
  if (message.toLowerCase() === '!عرض') {
    const userList = usersWhoSaidHi.join(', ');
    client.say(channel, `الاشخاص الي سلمو الى الان ${userList}`);
  }
});

client.on('message', (channel, userstate, message, self) => {
    if (self) return;
  
    if (userstate['message-type'] === 'whisper') {
      if (message.includes('herodevil3')) { // التحقق مما إذا كانت الرسالة تحتوي على "هل"
        client.whisper(`@${userstate.username}, كيف يمكنني مساعدتك؟`);
      }
      
      client.say('#herodevil777', `تم إرسالها من قبل ${userstate.username}: ${message}`);
    }
  });

  const moment = require('moment-timezone');

  // تحديد التوقيت المطلوب
  const RiyadhTimezone = 'Asia/Riyadh';
  
  let startTime;
  let isTiming = false;
  let firstMessageSent = ''; // تتبع أول رسالة تم إرسالها
  
  client.on('message', (channel, userstate, message, self) => {
    // تحقق مما إذا كان المستخدم مشرفًا أو صاحب البث
    const isModerator = userstate['user-type'] === 'mod';
    const isBroadcaster = userstate.username === 'herodevil777';
  
    // تجاوب مع الأوامر هنا للمشرفين وصاحب البث
    if (isModerator || isBroadcaster) {
      if (message.toLowerCase() === '!راح') {
        if (!isTiming) {
          const currentTime = moment().tz(RiyadhTimezone).format('YYYY-MM-DD HH:mm:ss');
          firstMessageSent = `تركي ترك البث في الساعة : ${currentTime}`;
          startTime = moment().tz(RiyadhTimezone);
          isTiming = true;
          client.say(channel, firstMessageSent);
        } else {
          client.say(channel, firstMessageSent);
        }
      }
  
      if (message.toLowerCase() === '!رجع') {
        if (isTiming) {
          const currentTime = moment().tz(RiyadhTimezone).format('YYYY-MM-DD HH:mm:ss');
          const endTime = moment().tz(RiyadhTimezone);
          const uptime = moment.duration(endTime.diff(startTime));
          const hours = uptime.hours();
          const minutes = uptime.minutes();
          const seconds = uptime.seconds();
  
          const uptimeString = `${hours}h ${minutes}m ${seconds}s`;
  
          client.say(channel, `herodevil777 HAS BEEN AFK  ${uptimeString}`);
  
          startTime = null;
          isTiming = false;
          firstMessageSent = '';
        }
      }
    } else {
      // الرد الثاني متاح للجميع بنفس الوقت الأول
      if (message.toLowerCase() === '!راح'  && firstMessageSent !== '') {
        client.say(channel, firstMessageSent);
      }
    }
  });
  
  
  
  
  
  
  
  
  


  /* const names = [
    "Herodevil777", "3nb77", "Xiriyadh", "Wizebot", "6_iqp", "Akafbi1", "Txb_r", "Fssool__kenpachi", 
    "Shayeb7lo", "Rsh4485", "Nightbot", "R_kan1", "Ox_5p", "Omar_san", "3mo_90", "Xiarmin", 
    "Mogiwara_ahmed", "Moha99aa", "Narikoboy_777", "Salem_al3nzy", "Nawafi_3", "Qxs24", "01ella", 
    "7bvllet", "7ga_l", "Abdullah_n90", "Abdullahk_2", "Abo_saleh119", "Abu_hajoos", 
    "Ahahahahhhhahahahahah", "Ahmed10_ln", "Anotherttvviewer", "Bfnt", "Bin_talal", "Bngo80", 
    "Commanderroot", "Cora900", "Discord4small_streamers", "Dragigamee", "Drapsnatt", "Elbulldozer_", 
    "Elysian", "F_society_k", "Fahadksa200", "Foka", "Goonx71", "Gz_vlog", "Hsheshha", "Iinolx", 
    "Irampage88", "Joshua_322", "Jumaaqtr", "Justmazen_", "Jwan_si", "Kakaroto01t", "Kattah", 
    "Kenshiro_png", "Leveltt", "Life3jeep", "Liyaso", "Llyonko", "Mohammed1422116", "Mugiwaraboy56", 
    "Noxioushead", "Omardaas90", "Richard9oipjx", "Rogueg1rl", "Salx5", "Shankooti", "Shouq", 
    "Sita_90", "Streamers_social_space", "Uchiha_faris", "Vr2kan", "Zeinitsu", "Zooz41", "Zoro_nu_one", "MEEMY90", "mugiwara911", "Kisuke_237","Rv0la", "Rraed_"
  ];

  client.on('message', (channel, user, message, self) => {
    if(self) return;

  

  const randomName1 = names[Math.floor(Math.random() * names.length)];
  
  
  

  if(message == "كف؟") {
    client.say(channel, `@${randomName1} سطرك كف  @${user.username}`);
  }

  if(message == "زواج؟") {
    client.say(channel, `@${randomName1} اعرس عليك @${user.username}`);
  }

  if(message == "طلاق؟") {
    client.say(channel, `@${randomName1} انت طالق @${user.username}`);
  }

  if(message == "بقس؟") {
    client.say(channel, `@${randomName1} بقسك @${user.username}`);
  }

  }) */

  /* 
  const moment = require('moment');
  
  // تعريف معلومات البوت وإعدادات الاتصال بخدمة تويتش
  const opts = {
    identity: {
      username: '3nb77',
      password: 'oauth:mig75mplrvicwifozvrbivl51h2amc' // يمكن الحصول عليه من https://twitchapps.com/tmi/
    },
    channels: [
      'herodevil777'
    ]
  };
  
  const targetTime = moment('2023-08-29 16:44:00');

// تنسيق الزمن
function formatDuration(duration) {
  return ` ${duration.hours()} ساعات, ${duration.minutes()} دقائق, ${duration.seconds()} ثواني`;
}

// إرسال الوقت كل 15 دقيقة
const timeInterval = 15 * 60 * 1000; // بالمللي ثانية (15 دقيقة)
setInterval(() => {
  const currentTime = moment();
  const timeDifference = moment.duration(currentTime.diff(targetTime));
  const formattedTime = formatDuration(timeDifference);

  client.say(opts.channels[0], ` مر من الوقت: ${formattedTime} ⏰`);
}, timeInterval);

client.on('message', (channel, userstate, message, self, viewers) => {
  if (self) return;

  if (message.toLowerCase() === 'بدا؟') {
    const currentTime = moment();
    const timeDifference = moment.duration(currentTime.diff(targetTime));
    const formattedTime = formatDuration(timeDifference);

    client.say(opts.channels[0], ` مر من الوقت: ${formattedTime} ⏰`);
  }}); */


   client.on('raided', (channel, username, viewers) => {
    const message = `شكراً ${username} على الRaid ب ${viewers} مشاهد! أهلاً بكم جميعًا في البث! 🎉`;
    client.say(channel, message);
  });
  
  const usersList = [];
  // رصد الدردشة والتعرف على ذكر الكلمة "go"
client.on('message', (channel, userstate, message, self) => {
  // تجاهل الرسائل الصادرة عن البوت نفسه
  if (self) return;

  // إضافة اسم المستخدم إلى القائمة إذا لم يكن موجودًا
  if (!usersList.includes(userstate.username)) {
    usersList.push(userstate.username);
  }
  const randomIndex = Math.floor(Math.random() * usersList.length);
    const randomUserName = usersList[randomIndex];

  // إذا تم ذكر كلمة "go" في الرسالة
  if (message.includes('كف؟')) {
    // اختر اسمًا عشوائيًا من القائمة وأرسله في الدردشة
    client.say(channel, `@${randomUserName} عطاك كف @${userstate.username}`);
  }
  if(message == "زواج؟") {
    client.say(channel, `@${randomUserName} اعرس عليك  @${userstate.username}`);
  }

  if(message == "طلاق؟") {
    client.say(channel, `@${randomUserName} انت طالق @${userstate.username}`);
  }

  if(message == "بقس؟") {
    client.say(channel, `@${randomUserName} بقسك @${userstate.username}`);
  }

  if(message == "حظن؟") {
    client.say(channel, `@${randomUserName} حضنك @${userstate.username}`);
  }

  if(message == "بوسه؟") {
    client.say(channel, `@${randomUserName} اعطاك بوسه @${userstate.username}`);
  }

  if(message == "قتل؟") {
    client.say(channel, `@${randomUserName} يبي يقتلك انتبه على نفسك @${userstate.username}`);
  }

  if(message == "طعن؟") {
    client.say(channel, `@${randomUserName} طعنك @${userstate.username}`);
  }

});
  setInterval(() => {
    if (usersList.length > 0) {
      const nonNightbotUsers = usersList.filter(username => username.toLowerCase() !== 'nightbot');
      if (nonNightbotUsers.length > 0) {
        const randomIndex = Math.floor(Math.random() * nonNightbotUsers.length);
        const randomUserName = nonNightbotUsers[randomIndex];
        client.say(channel,`@${randomUserName} ${list8[Math.floor(Math.random()*list8.length)]}`);
      }
    }
  }, 10 * 60 * 1000); // 10 دقائق بالمللي ثانية


  
/* const StreamlabsSocketClient = require('streamlabs-socket-client');

const twitchConfig = {
  identity: {
    username: '3nb77',
    password: 'oauth:mig75mplrvicwifozvrbivl51h2amc' // Generate this from https://twitchapps.com/tmi/
  },
  channels: ['txb_r']
};

const streamlabsConfig = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkUxRTc4OEJGNTE1M0I3Q0M5QjQ3IiwicmVhZF9vbmx5Ijp0cnVlLCJwcmV2ZW50X21hc3RlciI6dHJ1ZSwidHdpdGNoX2lkIjoiMjgwNTYzNzA0In0.2uAjiPhE9gaCSqGIIh2fTEkrTaeOV6q639rz6VrgBFU' // Generate this from Streamlabs API
};

const streamlabs = new StreamlabsSocketClient(streamlabsConfig);
streamlabs.connect();

// معالج للاشتراكات
client.on('subscription', (channel, username, methods, message, userstate) => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

// معالج للتبرعات
streamlabs.on('donation', eventData => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

// معالج للبتات
client.on('cheer', (channel, userstate, message) => {
  // قم بتنفيذ الاستجابة المناسبة هنا
});

streamlabs.on('donation', eventData => {
  const donationAmount = eventData.amount; // افترض أن هذه هي قيمة التبرع

  if (donationAmount >= 50) {
    // زيادة التايمر بمقدار 5 دقائق
  }
}); */



let currentWord = '';
let guessedLetters = [];
let wrongAttempts = 0;
const maxAttempts = 5;
let gameStarter = '';
let correctGuesser = '';
let gameTimer; // المؤقت لحساب الزمن

const wordsList = [
  'APPLE', 'ORANGE', 'BANANA', 'STRAWBERRY', 'WATERMELON',
  'PINEAPPLE', 'GRAPE', 'LEMON', 'PEACH', 'KIWI',
  'BLUEBERRY', 'BLACKBERRY', 'RASPBERRY', 'COCONUT', 'MANGO',
  'CHERRY', 'APRICOT', 'NECTARINE', 'PAPAYA', 'FIG',
  'PLUM', 'CANTALOUPE', 'HONEYDEW', 'LYCHEE', 'CARAMBOLA',
  'DRAGONFRUIT', 'PASSIONFRUIT', 'GUAVA', 'TANGERINE', 'LIME',
  'GRAPEFRUIT', 'JACKFRUIT', 'KIWANO', 'MANDARIN', 'PERSIMMON',
  'STARFRUIT', 'UGLIFRUIT', 'YUZU', 'ZUCCHINI', 'AVOCADO',
  'BROCCOLI', 'CARROT', 'CUCUMBER', 'EGGPLANT', 'GARLIC',
  'KALE', 'LETTUCE', 'MUSHROOM', 'ONION', 'PEPPER',
  'POTATO', 'PUMPKIN', 'SPINACH', 'SQUASH', 'TOMATO',
  'ARTICHOKE', 'ASPARAGUS', 'BEETROOT', 'CELERY', 'RADISH',
  'RHUBARB', 'TURNIP', 'WATERCRESS', 'BASIL', 'CILANTRO',
  'DILL', 'MINT', 'OREGANO', 'PARSLEY', 'ROSEMARY',
  'SAGE', 'THYME', 'CHAMOMILE', 'EUCALYPTUS', 'LAVENDER',
  'PEPPERMINT', 'SPEARMINT', 'VALERIAN', 'GINGER', 'TURMERIC',
  'CINNAMON', 'CLOVES', 'NUTMEG', 'ALLSPICE', 'CARDAMOM',
  'CORIANDER', 'FENNEL', 'SAFFRON', 'VANILLA', 'ANISE',
  'CHOCOLATE', 'CARAMEL', 'MARSHMALLOW', 'NUTELLA', 'PEANUT'
];

function getRandomWord() {
  return wordsList[Math.floor(Math.random() * wordsList.length)];
}

function displayWord() {
  let display = '';
  for (let letter of currentWord) {
    if (guessedLetters.includes(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerEnglish = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerEnglish(channel) {
  clearTimeout(gameTimerEnglish); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerEnglish = setTimeout(() => {
    if (currentWord !== '') {
      client.say(channel, `Time's up for English! The word was: ${currentWord}`);
      currentWord = '';
    }
  }, 60000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender = tags.username;

  if (message.toLowerCase() === '!start' && gameStarter === '') {
    gameStarter = sender;
    currentWord = getRandomWord().toUpperCase();
    guessedLetters = [];
    wrongAttempts = 0;
    correctGuesser = '';
    client.say(channel, `${gameStarter}, Let's start! The word is: ${displayWord()}`);
    startTimerEnglish(channel);
  }

  if (currentWord !== '' && sender === gameStarter && message.length === 1 && message.match(/[a-zA-Z]/)) {
    const guessedLetter = message.toUpperCase();
    if (!guessedLetters.includes(guessedLetter)) {
      guessedLetters.push(guessedLetter);
      if (currentWord.includes(guessedLetter)) {
        if (displayWord().indexOf('_') === -1) {
          winnersList.push(correctGuesser);
          client.say(channel, `Congratulations, ${sender}! You guessed the word: ${currentWord}`);
          currentWord = '';
        } else {
          client.say(channel, `Good guess, ${sender}! Current word: ${displayWord()}`);
          correctGuesser = sender;
        }
      } else {
        wrongAttempts++;
        if (wrongAttempts < maxAttempts) {
          client.say(channel, `Wrong guess, ${maxAttempts - wrongAttempts} attempts left. Current word: ${displayWord()}`);
        } else {
          client.say(channel, `Sorry, ${gameStarter}! You lost. The word was: ${currentWord}`);
          currentWord = '';
        }
      }
    } else {
      client.say(channel, `${sender}, you've already guessed '${guessedLetter}'. Current word: ${displayWord()}`);
    }
  }

  if (currentWord === '') {
    gameStarter = '';
    correctGuesser = '';
  }
});


let currentWord2 = '';
let guessedLetters2 = [];
let wrongAttempts2 = 0;
const maxAttempts2 = 5;
let gameStarter2 = '';
let correctGuesser2 = '';
let gameTimer2; // المؤقت لحساب الزمن

const wordsList2 = [
  'NARUTO', 'BLEACH', 'ONEPIECE', 'DRAGONBALL', 'ATTACKONTITAN',
  'DEATHNOTE', 'MYHEROACADEMIA', 'TOKYOGHOUL', 'FULLMETALALCHEMY', 'SWORDARTONLINE',
  'NEONGENESEVANGELION', 'FAIRYTAIL', 'POKEMON', 'ONEPUNCHMAN', 'HUNTERXHUNTER',
  'COWBOYBEBOP', 'BLACKCLOVER', 'DEMONSLAYER', 'BLENDERS', 'JOJOSBIZARREADVENTURE',
  'REZERO', 'GURRENLAGANN', 'STEINSGATE', 'ATTACKONTITAN', 'YOURNAME',
  'SPIRITEDAWAY', 'PRINCESSMONONOKE', 'KIMINONAWA', 'JUJUTSUKAISEN', 'DARLINGINTHEFRANXX',
  'FATEZERONIGHT', 'VIOLETEVERGARDEN', 'KONOSUBA', 'KILLALAKILL', 'FAIRYTAIL',
  'BLACKBUTLER', 'ASSASSINATIONCLASSROOM', 'ANGELBEATS', 'DEMONSLAYER', 'GINTAMA',
  'CODEGEASS', 'SOULSUCKERPUNCH', 'DARLINGINTHEFRANXX', 'STEINSGATE', 'DRSTONE',
  'THETATAMI GALAXY', 'TRIGUN', 'GREATTEACHERONIZUKA', 'COWBOYBEBOP', 'PROMISEDNEVERLAND',
  'SERAPHOFEND','NEONGENESISEVANGELION', 'NORAGAMI', 'BUNGOSTRAYDOGS',
  'TOKYOGHOUL', 'PARASYTE', 'MADEINABYSS', 'DEVILMANCRYBABY', 'GURRENLAGANN',
  'FIREFORCE', 'MOBPSYCHO100', 'HIGHSCOREGIRL', 'ERASED', 'DOROHEDORO',
  'LANDOFTHELUSTROUS', 'BLACKLAGOON', 'DANGANRONPA', 'AJIN', 'MAGI',
  'OVERLORD', 'FLCL', 'DURARARA', 'HAIKYU', 'BLACKCLOVER',
  'CLANNAD', 'BACCANO', 'KILLINGSTALKING', 'GANGSTA', 'BERSERK',
  'TOKYORAVENS', 'ELFENLIED', 'KAKEGURUI', 'CLAYMORE', 'FRUITSBASKET',
  'YURIONICE', 'HIGHSCHOOLDXD', 'PUELLAMAGIMADOKAMAGICA', 'SAILORMOON', 'PSYCHOPASS',
  'STUDIOGHIBLI', 'DEATHPARADE', 'SPACEBROTHERS', 'SPACEDANDY', 'NANATSUNOTAIZAI',
  'WATAMOTE', 'HELLSING', 'KUROKONOBASKET', 'SAIKIK', 'MARCHCOMESINLIKEALION',
  'HIGHSCHOOLOFTHEDEAD', 'ANGELBEATS', 'TENGENTOPPAGURRENLAGANN', 'FATESTAYNIGHT', 'DRIFTERS','DETECTIVECONAN'
  // ويمكنك إضافة المزيد من الأسماء هنا
];


function getRandomWord2() {
  return wordsList2[Math.floor(Math.random() * wordsList2.length)];
}

function displayWord2() {
  let display = '';
  for (let letter of currentWord2) {
    if (guessedLetters2.includes(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerAnime = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerAnime(channel) {
  clearTimeout(gameTimerAnime); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerAnime = setTimeout(() => {
    if (currentWord2 !== '') {
      client.say(channel, `Time's up for Anime! The anime was: ${currentWord2}`);
      currentWord2 = '';
    }
  }, 60000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender2 = tags.username;

  if (message.toLowerCase() === '!anime' && gameStarter2 === '') {
    gameStarter2 = sender2;
    currentWord2 = getRandomWord2().toUpperCase();
    guessedLetters2 = [];
    wrongAttempts2 = 0;
    correctGuesser2 = '';
    client.say(channel, `${gameStarter2}, Let's start! The anime is: ${displayWord2()}`);
    startTimerAnime(channel);
  }

  if (currentWord2 !== '' && sender2 === gameStarter2 && message.length === 1 && message.match(/[a-zA-Z]/)) {
    const guessedLetter2 = message.toUpperCase();
    if (!guessedLetters2.includes(guessedLetter2)) {
      guessedLetters2.push(guessedLetter2);
      if (currentWord2.includes(guessedLetter2)) {
        if (displayWord2().indexOf('_') === -1) {
          winnersList.push(correctGuesser2);
          client.say(channel, `Congratulations, ${sender2}! You guessed the anime: ${currentWord2}`);
          currentWord2 = '';
        } else {
          client.say(channel, `Good guess, ${sender2}! Current anime: ${displayWord2()}`);
          correctGuesser2 = sender2;
        }
      } else {
        wrongAttempts2++;
        if (wrongAttempts2 < maxAttempts2) {
          client.say(channel, `Wrong guess, ${maxAttempts2 - wrongAttempts2} attempts left. Current anime: ${displayWord2()}`);
        } else {
          client.say(channel, `Sorry, ${gameStarter2}! You lost. The anime was: ${currentWord2}`);
          currentWord2 = '';
        }
      }
    } else {
      client.say(channel, `${sender2}, you've already guessed '${guessedLetter2}'. Current anime: ${displayWord2()}`);
    }
  }

  if (currentWord2 === '') {
    gameStarter2 = '';
    correctGuesser2 = '';
  }
});  

let currentWord3 = '';
let guessedLetters3 = [];
let wrongAttempts3 = 0;
const maxAttempts3 = 5;
let gameStarter3 = '';
let correctGuesser3 = '';
let gameTimer3; // المؤقت لحساب الزمن
const wordsList3 = [
  'منزل', 'غابة', 'جدول', 'تلفاز', 'جدار', 'جو', 'حاسوب', 'هاتف', 'شبكة',
  'نافذة', 'ساعة', 'مذكرة', 'قلم', 'كتاب', 'قطار', 'طائرة', 'سفينة',
  'حقيبة', 'مفتاح', 'سلم', 'قرش', 'لبنة', 'نجمة', 'قمر', 'بحيرة', 'نهر',
  'شلال', 'دلو', 'فرشاة', 'معجون', 'شامبو', 'صابون', 'حامل', 'ستارة',
  'قطعة', 'طبق', 'فنجان', 'صحن', 'قصة', 'حلم', 'شجرة', 'وردة', 'تفاحة',
  'برتقالة', 'فراولة', 'جامعة', 'ماوس', 'كبسة', 'مندي', 'جوزهند',
  'تلفزيون', 'انارة', 'شمس', 'بحر', 'جبل', 'وادي', 'حديقة', 'زهرة', 'جذع',
  'سحابة', 'مطر', 'ثلج', 'ريح', 'عاصفة', 'رعد', 'برق', 'مدينة', 'قرية',
  'دار', 'طاولة', 'كرسي', 'باب', 'سيارة', 'دراجة', 'سيارة', 'سفينة',
  'قطار', 'حافلة', 'مطار', 'محطة', 'مستشفى', 'مدرسة', 'جامعة', 'مكتبة',
  'مسجد', 'كنيسة', 'معبد', 'سوق', 'محل', 'مطعم', 'كافيه', 'فندق', 'مسرح',
  'متحف', 'حيوانات', 'منتزه', 'حفلة', 'زفاف', 'تخرج', 'مهرجان', 'ألعاب',
  'كتاب', 'مجلة', 'صحيفة', 'رواية', 'قصة', 'شعر', 'تاريخ', 'جغرافيا',
  'علم', 'رياضة', 'كرة', 'حذاء', 'قميص', 'سروال', 'جينز', 'قبعة', 'نظارات',
  'هاتف', 'شاشة', 'كاميرا', 'سماعات', 'ماوس', 'قفل', 'محفظة',
  'حقيبة', 'مظلة', 'بطاقة', 'طعام', 'شراب', 'فاكهة', 'خضار', 'لحم', 'حلوى',
  'شوكولاتة'
  // يمكنك إضافة المزيد من الكلمات العربية هنا
];

function getRandomWord3() {
  return wordsList3[Math.floor(Math.random() * wordsList3.length)];
}

function displayWord3() {
  let display = '';
  for (let letter of currentWord3) {
    if (guessedLetters3.includes(letter)) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}

let gameTimerArabic = {}; // كائن لتخزين مؤقتات كل نسخة

function startTimerArabic(channel) {
  clearTimeout(gameTimerArabic); // إلغاء المؤقت الحالي إذا كان قيد التشغيل
  gameTimerArabic = setTimeout(() => {
    if (currentWord3 !== '') {
      client.say(channel, `انتهى الوقت! الكلمة كانت: ${currentWord3}`);
      currentWord3 = '';
    }
  }, 60000); // 60 ثانية = دقيقة واحدة
}

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  const sender3 = tags.username;

  if (message.toLowerCase() === '!كلمة' && gameStarter3 === '') {
    gameStarter3 = sender3;
    currentWord3 = getRandomWord3().toUpperCase();
    guessedLetters3 = [];
    wrongAttempts3 = 0;
    correctGuesser3 = '';
    client.say(channel, `${gameStarter3}, هيا بنا! الكلمة هي : ${displayWord3()}`);
    startTimerArabic(channel);
  }

  if (currentWord3 !== '' && sender3 === gameStarter3 && message.length === 1 && message.match(/[ء-ي]/)) {
    const guessedLetter3 = message.toUpperCase();
    if (!guessedLetters3.includes(guessedLetter3)) {
      guessedLetters3.push(guessedLetter3);
      if (currentWord3.includes(guessedLetter3)) {
        if (displayWord3().indexOf('_') === -1) {
          winnersList.push(correctGuesser3);
          client.say(channel, `تهانينا! لقد حزرت الكلمة : ${currentWord3}`);
          currentWord3 = '';
        } else {
          client.say(channel, `تخمين جيد! الكلمة الحالية : ${displayWord3()}`);
          correctGuesser3 = sender3;
                  }
      } else {
        wrongAttempts3++;
        if (wrongAttempts3 < maxAttempts3) {
          client.say(channel, `خطأ! لديك ${maxAttempts3 - wrongAttempts3} محاولة متبقية. الكلمة الحالية : ${displayWord3()}`);
        } else {
          client.say(channel, `آسف، لقد خسرت! الكلمة كانت : ${currentWord3}`);
          currentWord3 = '';
        }
      }
    } else {
      client.say(channel, `لقد حزرت '${guessedLetter3}' مسبقًا. الكلمة الحالية : ${displayWord3()}`);
    }
  }

  if (currentWord3 === '') {
    gameStarter3 = '';
    correctGuesser3 = '';
  }
});



/* 
const axios = require('axios');


let streamStartTime = Date.now();
let currentDuration = 0;

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (message.toLowerCase() === '!uptime') {
        const now = Date.now();
        const uptime = now - streamStartTime;
        const hours = Math.floor(uptime / 3600000);
        const minutes = Math.floor((uptime % 3600000) / 60000);
        client.say(channel, `الوقت منذ بدء البث: ${hours} ساعة و ${minutes} دقيقة.`);
    }
});

function increaseStreamDuration(minutesToAdd) {
    currentDuration += minutesToAdd;
    // هنا يمكنك إضافة الإجراءات اللازمة عند زيادة مدة البث مثل تحديث العرض أو إعلان الزيادة.
}

// يتم استدعاء هذه الوظيفة عند استلام تبرع أو دعم مالي
function onDonationReceived(amount) {
    const minutesToAdd = amount / 5; // على سبيل المثال: زيادة 5 دقائق لكل وحدة مالية
    increaseStreamDuration(minutesToAdd);
}

// قم بتحديث هذا المتغير بالوقت المنقضي بشكل ملائم
let elapsedTime = "00:00";

// تحديث نص العداد الزمني كل ثانية
setInterval(() => {
    // قم بتحديث elapsedTime بالوقت المنقضي الجديد بصيغة مناسبة (مثلا: "HH:mm:ss")
    // يمكنك استخدام Date.now() أو أي منطق لحساب الوقت المنقضي
    // مثال: elapsedTime = calculateElapsedTime();
    
    // قم بتحديث النص لعرض الوقت المنقضي الجديد
    document.getElementById('اسم-مصدر-النص').innerText = `الوقت المنقضي: ${elapsedTime}`;
}, 1000); // تحديث كل ثانية (1000 ميلي ثانية)
 */

const startTime2 = moment.tz('2024-01-10 18:19:12', 'Asia/Riyadh'); // تعيين الوقت المحدد بتوقيت الرياض

// التفاعل مع الرسائل
client.on('message', (channel, userstate, message, self) => {
  const commandArabic = '!مر';
  const commandEnglish = '!time';
  if (
    message.toLowerCase() === commandArabic ||
    message.toLowerCase() === commandEnglish
  ) {
    const currentTime = moment();
    const duration = moment.duration(currentTime.diff(startTime2));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) - hours * 60;
    const seconds = Math.floor(duration.asSeconds()) - hours * 3600 - minutes * 60;

    let timePassed = `${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
    let responseMessage = '';

    if (message.toLowerCase() === commandEnglish) {
      timePassed = `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
      responseMessage = ` ${timePassed} `;
    } else {
      responseMessage = ` لقد مرّ من الوقت ${timePassed} `;
    }

    client.say(channel, responseMessage);
  }
});


