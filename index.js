const AWS = require("aws-sdk");
const s3 = new AWS.S3()

const tmi = require('tmi.js'),
    { channel, username, password, client_id, api_access_token, channel_access_token, boy, girl, eiad } = require('./settings.json');

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
    channels: [channel]
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

const list5 = ['جوي','انا دايمًا المركز الاول بالعالم مو مثل بابا ضئيل','مالي خلق ابي اتبطح وازط', 'لعبتكم نايمه','مكانتي ما تسمح لي ألعب معكم', 'العبو مع ابوي الي مو فالح الا بالخسارة والهبد','لا مالي نفس بتفرج عليكم بس ',' حسن مستواك وتعال ',' انت غبي تتحدى بوت ',' شوف اذا فيها عشى قُدَّام ',' لا انا فاشل انا حشرة انا ضئيل بس ماراح تفوز علي ',' مسوي خوي ',' معي اتصال دقيقه   herode3AKAFBI  ',' امي تبي خبز ',' ما اقدر لانه مررررة جوعان ',' جالس احتسي القهوة السوداء ',' لا انا اجازة اليوم ',' مسوي مشاكل مع ابوي ',' ابي اتزوج ماني فاضي حقك ',' انا خلني احل واجبي قال تحدي قال',]

let randomElement2 = list5[Math.floor(Math.random()*list5.length)]
        
console.log(randomElement2)

const list6 = ['وش قهوته انا من حزب الشاي','ما اشرب الا قهوة عربية ولو سمحت لازم حلا','لا اشرب الا القهوة المُقطرة','وش قهوة مافي اطلق من الحليب الفراولة السعودية','بسال ماما اذا عادي لان تقول ان بس للعجايز','مطفر','سبانش لاتيه', 'لا شربت ',' قهوة من دانك حجم وسط دارك روست ',' كرك ',' شاي اخضر توي ماكل ',' ماتشا ',' ايس شيكن فرابتشينو دبل شوت ايسبريسو ',' كارميل ميكانو ',' مويه وحارة بعد ',' سنتوب ',' حمضيات ',' ببسي دايت ',' تفاح صح مو شيء ثاني ',' لا جيعان ',' فيمتو باااارد ',' زنجبيل لانه حلقي مكربن ',' حل عني حل ',' لا ابي اكل اكتب اكل؟ ',' ونبيس عمك احم احم بالخطاء لا ما ابي اشرب ',' شوف اسأل هذا @txb_r ',' دم ',' كودريد نكهه ',' بلاك كافي كسواد دنياي ','ابي غوار ',' بابونج ',' شاي مغربي ',' بيرة؟ ',' هات اي شيء ',' لبن بارد ',' صايم ',' لا زعلان ',' هات سفن بطني جالس يسوي حركات ',' لا وحل عني ',' شتبي؟؟ مسوي خوي ',' شوف كنت بتقبل من الكل بس منك انت؟؟ قلوا الناس ',' شاي منعنع مع فصفص واحلى حش ',' كورتادو ',' لاتيه والحليب لوز عشان تعرف فيجن ',]

let randomElement3 = list6[Math.floor(Math.random()*list6.length)]
        
console.log(randomElement3)

const list7 = ['شيء نفسك يرجع ؟',' من علامات روقانك ؟ ','مين تتوقع ينظر إليك طول الوقت بدون ملل ؟ ',' وش اسم الحي الي ساكن فيه ؟',' لو واحد يتدخل ف امورك وانت م طلبت منه وش بتقوله ؟',' وش اول طريقة تتبعها اذا جيت تراضي شخص آخر ',' شيء اشتريته عبر الانترنت، وكيف كانت تجربتك ؟',' شيء عندك اهم من الناس',' كذبة كنت تصدقها وانت صغير','  لو أتيح لك الزواج من غير جنسيتك، اي جنسية ستختار ؟',' اسف تقولها لمين ؟',' كم وزنك ؟',' افضل طريقة تراضي فيها شخص قريب منك ؟ ','اعز صديق عندك كيف تعرفت عليه ؟ ',' اكثر شخص يسوي فيك مقالب ؟ ','حكمة تؤمن بها جدا؟؟ ولماذا؟ و على من طبقتها ؟ ',' شخص يعرف عنك كل شي تقريباً ؟',' اشياء اذا سويتها لشخص تدل على انك تحبه كثير ؟',' مع او ضد: خير لك ان تكون مغفلاً من ان تستغفل غيرك  ',' ثلاث اشياء جنبك الحين ؟ ','جربت الشهرة او تتمناها ؟ ',' لو كنت شخصية انمي اي شخصية بتكون ؟',' اكثر مكان تحب تجلس فيه في البيت ؟',' منشن شخص لو م شفته تحس يومك ناقص ؟',' اكثر شيء ضيعت عليه فلوسك ؟',' عرف عن نفسك بسطر','  وش اكثر سؤال يدور في بالك ؟',' شيء من الماضي للحين عندك ؟',' اذا كنت بنقاش مع شخص وطلع الحق معه تعترف له ولا تصر على كلامك ؟',' عمرك طحت بمكان عام ؟',' ما معنى الحب بنظرك ؟',' خطط السفر الخاصة بك غالبًا ما تكون مدروسة ؟',' لو شلنا من طولك 100 كم يبقى من طولك ؟',' اكتب اول كلمة جات في بالك الحين ؟',' أطول مدة نمت فيها كم ساعه ؟',' ليت الدّنيا حلوه مثّل ؟ ','بماذا يُحدثك قلبك هذه الأيام ؟ ','من النوع اللي تحفظ اسامي الناس بسرعه ولا بس اشكالهم ؟ ',' أخر مرة نزل عندكم مطر ؟',' كيف سيكون العالم لو كان مثلك ؟',' كم من 10 تحس بـ الطفش ؟ ','لو احد بيذكرك فيه وانت ناسي بتسلك له ؟ ','حكمة اليوم وكل يوم ؟ ',' هل انت من لديهم رغبة حب التملك واذا تملك الشيء اصابه الملل منه ؟',' ماهو اخطر عدو للانسان ؟',' من الاشياء البسيطة اللي تسعدك ؟',' لو كنت ممثل وش تتوقع الدور الي بتتقنه؟',' هل تقلق بما يعتقده الآخرون عنك ؟',' وش اسم اول شخص تعرفت عليه في التويتش ؟',' اتفه شيء ارسلوك عشانه ؟',' وظيفة تحسها لايقة عليك ؟',' تفضل اللوان داكنة ولا فاتحه ؟',' اهم شيء يكون معك في كل طلعاتك ؟',' الشخص الذي اعترف لك بالحب استمر بحبك أم تبخر كالعادة؟',' متى لازم تقول لا ؟',' اغنيتك المفضلة',' ... جربت تروح اختبار بدون ما تذاكر ؟',' كم من عشرة تقيم يومك ؟',' قوة الصداقة بالمدة ولا بالمواقف ؟ ','مقوله او مثل او بيت شعر قريب من قلبك ؟ ','أكتب شيء تؤجر عليه ... ',' غالبًا وش تسوي الأن لو ماكان في بث تركي ؟ ','لو رجع لك شخص تعرفه بعد علاقته بالخيانة ، راح ترجع نفس اول ؟ ',' لو التمني يصير حقيقة وش بتسوي؟ "وش امنيتك بتكون','@منشن: الشخص الي عادي تقوله اسرارك ',' احقر الناس هو من ؟',' عادة غريبة تسويها',' .. تحب المكالمات الطويلة ؟',' اكثر شخص فاهمك بالدنيا ؟',' أجمل اسم بنت بحرف السين ؟',' وش تقول اذا شفت وجهك بالمراية ؟',' عمرك فضفضت لـ شخص وندمت ؟','تشوف انك قادر على تحمل المسؤولية ؟ ',' اسم الطف شخص مر عليك الكترونياً',' لو خيروك بين يعطونك مليون أو راتب شهري متوسط بدون عمل مدى الحياة إيش تختار ؟ ',' لو فقط مسموح شخص واحد تتابعه في السناب فمن بيكون ؟ ',' (انت كل شيء بحياتي) لمن تقولها ؟',' شخص يكلمك بشكل يومي ؟',' ايموجي يعبر عن وضعك الحين ؟',' اكثر مصايبك مع مين ؟',' عادي تطلع وجوالك مافيه شحن كثير ؟','  تقدر تسيطر على (ضحكتك - نومك - جوعك)؟؟ ',' كم من عشرة تحب الجلسة بالبيت ؟',' مع او ضد: دائما يكون اهتمامنا مع الانسان الخطأ','  أكثر شي شاغل تفكيرك هاليومين ؟','مع او ضد: لو ما اخذت شيء معك وقت زيارة احد انت مقصر  ','أكثر حيوان تحبه ؟ ',' من النوع اللي تعتمد على غيرك ولا كل شي تسويه بنفسك ؟',' وش ابشع شعور مريت فيه ','كم نسبة الغيرة عندك من 10 ','  متى اخر مره قلت ليتني سكت ؟',' أنت على منبر الآن والجميع يستمع، ماذا ستقول ؟','اذا زعلت إيش يرضيك ؟ ',' مع كم صديق حقيقي خرجت خلال مسيرتك للآن؟',' حلمك بالمستقبل ؟',' شايل هم شيء ؟',' "المنطقي عديم إحساس" مع أو ضد والسبب؟ لقبك عند اخوياك ؟',' كم تحتاج وقت عشان تتعود على مكان جديد ؟',' لو للحياة لون إيش بيكون لون حياتك ؟',' لو أصبت بحالة اكتئاب هل لديك مانع من اللجوء إلى طبيب نفسي؟',' اكلة ادمنتها الفترة ذي ؟',' كم تعطي نفسك من 10 في اللغة الانجليزية ؟',' العصر إيش كنت تسوي ؟',' كم تعطي نفسك من عشرة بالجدية بحياتك ؟',' سؤال دايم تتهرب من الاجابة عليه',' اطول مدة قضيتها بدون اكل ؟',' أكثر مشاكلك بسبب ؟',' قبل ساعة، ماذا كنت تفعل ؟',' كلمة تقولها لـ بعض الاشخاص في حياتك',' لو أتيحت لك الفرصة للجلوس مع شخص غايب عنك، مَن ستختار؟','نظام نومك ',' ما هي الشخصية المُستفزة بالنسبة لك ؟',' كيف تعرف اذا هذا الشخص يكذب ولا لا ؟',' شخص تحبه ','@منشن : شخص تشوفه نفسية ',' مين جالس عندك ؟',' تنام بـ اي مكان ، ولا بس غرفتك ؟',]

let randomElement4 = list7[Math.floor(Math.random()*list7.length)]
        
console.log(randomElement4)

const list2 = ['herode38nf4', 'herode3AKAFBI', 'herode3Gutiar','herode3DANCEE','herode3Mst83d','herode3T8HO',]

let randomElement = list2[Math.floor(Math.random()*list2.length)]
        
console.log(randomElement)

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

const list8 = ['تعال نروح ديسكو سوا','يا حلو عازمك على اسكريمة على حساب امي','lilfokaAr7b ياحلو ممكن سناب؟','تعال نشرب عصير تفاح سوا','يلا نروح البحر والشوي علية','زرفت تذكرتين حق ماما وبابا يلا نروح سوا',' ماودك تصمت قليلًا ',' ياخي هالشخص محنك ',' ترى إشتقنا ',' يابيبي تعشيت؟ ',' معي فصفص معاك شاي؟ ',' تروح افر البولي فر ؟ ',' في معركة رجل ل رجل من المنتصر',' عازمك على ستيك على حساب ',' ايه تقول ياحلوتي كيف كان يومك؟ ',' ياخي انت فنان ',' الحين جد جد عندي سؤال انت ليه حلو؟ ',' قالوا ترى مالك امل ……. ',' ليه ماتتابع حساب ماما في تويتر؟ ',' هل نحن وحدنا؟ ',' ودي اتنكس وانت؟ ',' وش رايك ب  ',' lilfokaHehe  ارسل رقمك ويسبر عشان عندي موضوع معاك ','عندك حليب مقطر؟',' احس ماحبيتك',' احس حبيتك شويا ',' تتوقع انا بنت ولا ولد؟ ',' هااي اخترتك عشان تعاركني ف عاركني حالا ',' هيه انت تحب الطماطم ولا الجزر؟ ',' ابغا اكل باستا سويلي ',' لو خيروك تكون حواجب ماما خديجه ولا جبهه بابا تركي اش راح تختار؟ ',' تحبني ولا تحبني؟ ',' عندك ماسكات؟ خلصو ماسكاتي انا حزينه ',' هاي انا عنبه تشااان~ ',' ماما دايم تحذرني منك ',' انت خفاش؟ ',' احس وضعك مشكوك فيه صراحه',' متى اخر مرا بكيت؟ ',' ابغا ابكي عندك شي ابكي عليه؟ ',' انا حزينه احتاج مواساه',' بيو بيو طخيتك سوي نفسك ميت','احس انتو الاثنين تهاوشو قدامي ابغا اضحك','اسمعو انتو تعرفون بعض؟','اش رايكم نصير الاصدغاء الثلاثه؟','يقول انك كريه شويا','يقول انك افضل ما رأته عيناه ','ترا قال لي انك بكايه','ترا ذا يقول انك عسل عسل','ترا هذا ناوي عليك يبغا يشرشحك','ترا يقول انك دجاجه',]

let randomElement8 = list8[Math.floor(Math.random()*list8.length)]
        
console.log(randomElement8)

const list3 = ['llfayY3 افف', 'llfay500  خذ و اسكت', ' llfayAyoa  جالس احط ميكياج ل امي',' llfayY3  افف ريحتك حلوه ',' llfay2 انا متخبي','llfayFaisalu همممم انت لذيذ','lilfokaHii هااااااي','lilfokaRamadance تعال ارقص','lilfokaNOTME انا ماسويت شيء','lilfokaYee اخيرا ',' تبي اعلم؟','lilfokaWAAA ماما شوفيه ','lilfokaHehe يازينك','lilfoka3zoz انا مستعجل','lilfokaCRYY ابد ما يزعل ','lilfoka3zoz انا مستعجل','lilfokaHUNTER همممم','lilfokaSip انا مسكين ',' lilfokaCUTEEE احس يخوف أو شي','lilfokaSip انا مسكين ','lilfokaStare ترى اشوفك ','lilfokaHfff انا جيعان لحد يكلمني','herode3Sleep  أستاذنكم','herode3Mst83d اسلم ','herode377dance  ارقص','herode3Gnon يالليل',]

let randomName = list3[Math.floor(Math.random()*list3.length)]
        
console.log(randomName)

const listمدح = ['أنا فخورُ بإبداعك','شكراً لوجودك ضمن بثنا فأنت هبة من الله لنا','أنت حقاً جوهرة من الإبداع أتمنى أن تظل مبدعاً إلى الأبد','أنت شخص رائع أكثر مما تدرك','كم نحن محظوظون بوجود شخص لديه أفكار مبتكرة مثلك بيننا','عندما نبحث عن كلمات الشكر والتقدير تعجز الكلمات عن وصف ما نشعر به وتجف الأقلام قبل أن نكتب لك رسالة شكر وثناء','ما أروع العمل مع شخص مبدع مثلك لا يستسلم حتى يحقق أهدافه','لقد حاولت صياغة عبارات مدح عديدة لثنائك وشكرك على ما قدمت لنا ولكنك تجاوزت كل تلك العبارات','أجمل عبارات الشكر والعرفان لا بد أن تسبق حروفي وتنهي السطور المعبرة عن صدق المعاني النابعة من قلبي لك','كيف يكون لديك دائماً أفضل الأفكار الإبداعية، ياله من شئ رائع أن يكون إبداعك ليس له حدود','أحب طريقة تفكيرك للغاية، لا بد أن نطبق أفكارك الإبداعية على أرض الواقع، لقد أنعم الله عليك بأقصى قدر من الإبداع','أنا حقاً أحب الحديث معك فهو يفتح لي آفاقاً جديدة للتفكير','يسعدنا دائماً أن نرى نجاحك أنت حقاً تستحق ذلك','كم نحن فخورين بالنجاح الذي تحققه','لقد ساعدتنا مهاراتك الرائعة في حل مشكلاتنا والوصول إلى أهدافنا بسرعة أكبر','أتوقع لك الوصول إلى قمة النجاح فدائماً أندهش من عملك الجاد وتفانيك في أداء العمل','الإبداع في أداء عملك لم نرى مثيلاً له من قبل في بثنا','المبدع الوحيد الذي أكون سعيداً بالاطلاع على عمله هو أنت','مازلت قادراً على تقديم عمل مميز','أنت مصدر إلهام للأخرين','كم هو جميل التحدث مع شخص مبدع مثلك فأنت دائماً تنظر للحياة من منظور مختلف ومميز','لا شك أن العمل معك شئ رائع','يا لك من شخص قادر على تحقيق نتائج مبهرة رغم وجود الكثير من الأزمات شكراً لك','إن الأحرف التي باتت كلمات والكلمات التي باتت جمل فقدت كل عبارات الجمال في سبيل جمال ما تقدمه لنا','إلى صاحب أعظم مهنة وحامل أعظم رسالة كل عبارات المدح وقصائد الشكر لا تفي حقك','أنت أكثر شخص مبدع قابلته على الإطلاق','Wow, that’s how you create Very inspiring',]

let randomElementمدح = listمدح[Math.floor(Math.random()*listمدح.length)]
        
console.log(randomElementمدح)

const listسته = ['@6_iqp هلا هلا سته ','@6_iqp هلا هلا طقب','@6_iqp اهلا عطب','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','',]

     let randomElementسته = listسته[Math.floor(Math.random()*listسته.length)]
        
      console.log(randomElementسته)

      const listso = ['!sr https://music.youtube.com/watch?v=Xi1SmdBvJ5U&feature=share', '!sr https://www.youtube.com/watch?v=EgT_us6AsDg&pp=ygUMc2VsZW5hIGdvbWV6', '!sr https://youtu.be/I4rtcJnRd6s','!sr https://www.youtube.com/watch?v=J6Ygf4pGcjo','!sr https://www.youtube.com/watch?v=v1miNcZiw74&list=RDGrUky4ZTVmE&index=26','!sr https://music.youtube.com/watch?v=zlF-KFWf6c4&feature=share',]

      let randomElementso = listso[Math.floor(Math.random()*listso.length)]
              
      console.log(randomElementso)

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
    client.say(channel, `السلام عليكم عنب جاء herode38nf4 `);
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
        client.say(channel,` ${cat1} ${cat2} ${cat3} ${cat4}`); 
    } else {
        client.say(channel,`@${user.username} ما اسمع الا من البق بوس`)
    }
}

if (cat4 == 'title') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير العنوان')
}}

if (cat4 == 'game') {
    if(username == 'Nightbot') {
    client.say(channel, ' تم تغير القيم ')
}}

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
        client.say(channel,`ارحب يا ${cat2} تو ما نور البث herode3T8HO `)
    } else {
        client.say(channel,`يا اهلًا و سهلًا منورين جميعًا`)
    }
    }

    if(username == `mugiwara911`) { 
        const listمم = [``, '','','', '','','','','','','','',]
   
        let randomElementمم = listمم[Math.floor(Math.random()*listمم.length)]
           
         console.log(randomElementمم)
        client.say(channel, `${listمم[Math.floor(Math.random()*listمم.length)]}  `);
    }

    if(message == '!hello') {
        client.say(channel, `@${user.username}, hello!`);
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

    if(username ) {
        
        const listmod = [`@${user.username} ${list8[Math.floor(Math.random()*list8.length)]} `, '','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','','', '',]
   
        let randomElementmod = listmod[Math.floor(Math.random()*listmod.length)]
           
         console.log(randomElementmod)
   
           client.say(channel, ` ${listmod[Math.floor(Math.random()*listmod.length)]}  `);
    }

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
                        const listتركي = [` وش تبي انت ركز على بثك @herodevil777`, '','','', '','','','','','','','','','', '','','','','', '','','','','', '','','','','', '',]
   
        let randomElementتركي = listتركي[Math.floor(Math.random()*listتركي.length)]
           
         console.log(randomElementتركي)
        client.say(channel, `${listتركي[Math.floor(Math.random()*listتركي.length)]}  `);
    }

    if(message == 'ارقص عنب') {
        if(username == 'txb_r') {
            client.say(channel, `herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar`);
            client.say(channel, `herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar`);
            
            setTimeout(function () {
    
                console.log(client.say(channel, `herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE`))
                console.log(client.say(channel, `herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE`))
            
        },6000);
        }
        if(username == 'imosabx7') {
            client.say(channel, `herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar`);
            client.say(channel, `herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar herode3Gutiar`);
            
            setTimeout(function () {
    
                console.log(client.say(channel, `herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE`))
                console.log(client.say(channel, `herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE herode3DANCEE`))
            
        },6000);
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
    }

        if(username == 'EIADz_88') {
        client.say(channel, `!timeout ${cat1}  1`);
    }}

    if(firstWord == 'احس') {
        client.say(channel, `@${user.username}, ياليييل انت و احساسك herode3Gnon `);
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
        client.say(channel, `@${user.username} تخليني لحالي lilfokaCUTEEE `);
    }

    if(message == 'وش تاكل عنب') {
        client.say(channel, `@${user.username} كباب ب الشكلاطه lilfoka3zoz `);
    }

    if(firstWord == '!roll') {
        client.say(channel, `@${user.username} the number is ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1} ${Math.floor(Math.random() * 6) + 1}`);
    }

    if(message == 'حظي؟') {
        client.say(channel, `@${user.username} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} ${list2[Math.floor(Math.random()*list2.length)]} `);
    }

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
        } 

        if(username == 'Rraed_') {
            client.say(channel,`@${user.username} ابشر`);
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        }
        
        if(username == 'herodevil777') {
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

if (firstWord == '❌') {
    if(username == 'txb_r') {
        client.say(channel,`herode3Fhmny  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }
    if(username == 'WizeBot') {
        client.say(channel,`herode3Fhmny  يلا استاذنكم في امان الله`)
        setTimeout(function () {
            client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]} `);
        },2000);
    }}
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

    getRandomViewer("herodevil777").then(async randomuser => {

    if(message == "عشاء؟") {
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
      }

    if(firstWord == 'لغز؟') {
        client.say(channel, ` اوجد ${list20[Math.floor(Math.random()*list20.length)]} (${list30[Math.floor(Math.random()*list30.length)]}) `);
    }
        
        if(firstWord == 'السلام')  {
            client.say(channel, `@${user.username} وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]}  `);
            if(username == 'txb_r') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            }
        }

        
        if(firstWord == 'سلام') {
            client.say(channel, `@${user.username} وعليكم السلام ورحمة الله و بركاته ${listسلام[Math.floor(Math.random()*listسلام.length)]} `);
            if(username == 'txb_r') {
                client.say(channel, `${listترحيب[Math.floor(Math.random()*listترحيب.length)]} ${listeiad[Math.floor(Math.random()*listeiad.length)]}`);
            }
        }

        if(firstWord == 'عنب') {
            client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]} `);
        }

        if(firstWord == '@3NB77') {
            client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
        }

        if(firstWord == '@3nb77') {
            client.say(channel, `@${user.username} ${list3[Math.floor(Math.random()*list3.length)]}`);
        }

        if(message == 'كوماند؟') {
            client.say(channel, `@3NB77 - عنب - لغز؟ - سؤال؟ - شرب؟ - تتحدى؟ - نطلع؟ - اكل؟ - حظي؟ - وش تاكل عنب - امدحني - مود - عطنا حكمة - شرايك - ابو جبهة - وش تكره عنب؟ - عنب تحبني؟ - وين عنب - عنوب - عنب؟ - عنبي - احس - عنفني - عاركني - احبك عنب -  و الكثير و الكثير من الكماندات `);
        }

        if(firstWord == 'اغنيه') {
            client.say(channel, ` ${listso[Math.floor(Math.random()*listso.length)]}`);
        }
        
        
})});

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
        client.say(channel,`حيواواواوواووانااتت herode3DANCEE `)
    }

 const tmi = require('tmi.js');
const gptAPIKey = 'your-gpt-api-key';

client.connect();

client.on('message', async (channel, userstate, message, self) => {
  if (self) return;

  // Call the GPT API to generate a response
  const response = await generateResponse(message);

  // Send the response back to the chat
  client.say(channel, response);
});

async function generateResponse(message) {
  // Call the GPT API to generate a response
  // You'll need to replace this with your own API call
  const response = await callGPTAPI(message, gptAPIKey);

  return response;
}

async function callGPTAPI(message, apiKey) {
  // Make an API call to the GPT API to generate a response
  // You'll need to replace this with your own API call
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: message,
      max_tokens: 50,
      n: 1,
      stop: '\n'
    })
  });

  const data = await response.json();
  return data.choices[0].text.trim();
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


  /* let startTime;

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







