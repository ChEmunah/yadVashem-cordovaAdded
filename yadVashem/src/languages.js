import React from 'react';
import CoverPageLogoEnglish from './images/CoverPageLogoEnglish.png';
import CoverPageLogoHebrew from './images/CoverPageLogoHebrew.png';
import WarsawGhetto from './images/WarsawGhetto.jpg';
import WarsawGhetto1 from './images/WarsawGhetto1.jpg';
import GlidNandor from './images/GlidNandor.jpg';
import FromHolocausttoRebirth from './images/FromHolocausttoRebirth.jpg';
import FromHolocausttoRebirth1 from './images/FromHolocausttoRebirth1.jpg';
import CattleCar from './images/CattleCar.jpg';
import GlidNandorAudio from './audio/GlidNandorAudio.mp3';
import yehudah_poliker_efer_veavak from './audio/yehudah_poliker_efer_veavak.mp3';
import BezemAudio from './audio/BezemAudio.mp3';



export let languages = {
    Hebrew: {
        path: 'He',
        coverPage: {
            title: 'סיור מודרך בקמפוס',
            imgSrc: CoverPageLogoHebrew,
            next: 'הבא'
        },
        locationListPage: {
            placeHolderSearch: 'חפש'
        },
        locationsList: {
            GlidNandor: {
                label: 'גליד נאנדור',
                description: <div>גליד נאנדור
                האנדרטה בפניה אתם ניצבים כעת, שאת ושבר – יד זיכרון לקרבנות מחנות הריכוז וההשמדה , היא העתק של האנדרטה אותה תכנן ועיצב הפסל היוגוסלווי ממוצא יהודי נאנדור גליד במחנה דכאו.
                ב-1979 תרם האומן יציקת ארד לגן הפסלים ביד ושם.
                גליד נולד בשנת 1924 בעיר סובוטיצה שביוגוסלוויה ובמהלך מלחמת העולם השנייה איבד כמעט את כל משפחתו. כחמישים מהם שולחו לאושוויץ ובתום המלחמה נותרו בחיים  רק אחותו ודודו.
                נאנדור גוייס ב-1942 לשירות עבודת כפייה במסגרת צבא הונגריה. הוא הצליח לברוח ב-1944, הצטרף אל הפרטיזנים של טיטו במסגרתם לחם כנגד הנאצים עד פציעתו.
                לאחר השחרור וההחלמה מהפציעה החל בלימודיו באקדמיה לאמנות בבלגרד, ולימים שימש פרופסור בפקולטה לאמנות שימושית ועיצוב.
                גליד, התמחה בפיסול, ויצירותיו הספוגות בזיכרון השואה, מוצגות ברחבי העולם.
                אחת האנדרטאות המרשימות שעיצב ממוקמת כאמור באתר ההנצחה שהוקם בשטח מה שהיה מחנה דכאו בגרמניה. במחנה הריכוז הראשון שהקימו הנאצים, חודשים ספורים לאחר עלייתם לשלטון, נבנתה בשנת 1968 אנדרטה זו שהוצבה ברחבת המסדרים לשעבר במחנה.
                גליד יצר את הפסל מתוך כוונה לטלטל את הצופים בו: "רציתי לפנות אל הגרמנים ולומר להם. תראו איך נראו בני אדם. מאחורי הגדר הזאת, תראו איך נראו מתנגדי השלטון הנאצי מאחורי הגדר הזו."
                הפסל מעוצב כולו באמצעות סמל המחנה – הגדר. בין שני מוטות תלויים שלדי בני אדם היוצרים סבך הנראה כגדר תיל. המוות והחידלון הגלום בעולם המחנות ניבט לנגד עיניכם. רוב הדמויות מפוסלות כשחלל נפער באזור הבטן  במטרה לגלם את הרעב והרזון שהיו מאפיין מרכזי של תנאי האסיר. הדמויות מפורקות, מעונות בייסורים אחרונים. הביטו בידיים מסמלות את זעקת הקורבן. זעקת הכאב, הרחמים הייאוש לצד הקול הצועק למאבק ולהישרדות. את פסלו הציב גליד בחלל הפתוח הפונה לנוף הרי ירושלים. שימו לה להיטל של הצל שמטיל הפסל בשעות השונות. הצל משנה מקום ומעיד על חוסר המנוחה הבלתי נתפס של האסיר, הקרבן. הצל מהווה גם מעין אזהרה למבקר: מראות המעונים הם צל הרודף את האנושות כלקח תמידי לגבי שתי קצותיה של רוח האדם, הטוב והרע האנושי.


                </div>,
                vocalSrc: GlidNandorAudio
            },
            WarsawGhetto: {
                label: 'כיכר גטו וורשה',
                description: <div><p>הפסל "מרד גטו ורשה" הוא חלק מקיר הזיכרון ברחבת כיכר גטו ורשה ביד ושם. במרכז הפסל דמותו של מנהיג המרד, מרדכי אנילביץ'. חלקה השני של היצירה - ההליכה אל המוות - נמצא מימין לפסל ומתאר את הגירושים ההמוניים של היהודים אל מחנות ההשמדה. האנדרטה קבועה בקיר העשוי מלבנים אדומות המסמלות את חומות הגטו.</p><p>‬פסל - נתן רפפורט.</p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            FromHolocausttoRebirth: {
                label: 'קיר השואה והגבורה',
                description: <div>הקשר של נפתלי בזם עם השואה החל עם הגעתו לארץ מאסן שבגרמניה, נער בן ארבע עשרה באוגוסט 1938, שבועיים לפני פרוץ מלחמת העולם השנייה.
                בזם הגיע במסגרת עליית הנוער בעוד הוריו שנותרו בעיר הולדתו, נרצחו בשואה. לאחר סיום לימודיו באקדמיה לאומנות בצלאל יצא נפתלי בזם בשנת 1947 עם משלחת מורים למחנות בקפריסין. שם פגש בעשרות אלפי ניצולי השואה שהועברו לשם על ידי הבריטים כשנתפסו בניסיון להגיע ארצה. הוא לימד אותם אמנות, ונחשף לסיפוריהם.
               בהתאם לאווירה בשדה האמנות הישראלי, השואה לא הייתה בתחילה חלק מיצירתו של בזם. הוא החל לכלול את סמליה, באופן ייחודי לו, רק בשלב מאוחר יותר, כאשר האירועים הפוליטיים ומאוחר עוד יותר, האישיים, יצרו מערכת קשרים סבוכה עם זיכרונותיו ורגשות האשם שלו כפליט.
               משפט אייכמן בשנת 1961 יצר אצל בזם תנופה חדשה של ציורים שעסקו בסמלים הקשורים בשואה, אך ללא ספק שיאו של תהליך ייצוג השואה ביצירתו מתגלם בתבליט האלומיניום בפניו אתם עומדים "קיר השואה והגבורה" אותו הזמינה הנהלת יד ושם בשנת 1970.
               האומן יצר תבליט המורכב מארבעה חלקים היוצרים נרטיב אחד, המסודר על ציר זמן החל מן השואה ועד לתקומת עם ישראל בארצו.
               בחלק הראשון, "השואה", מתוארת אישה, אם המשפחה. האם אוחזת בשני פמוטים הפוכים המייצגים את חורבן החיים היהודיים. מעליה ארובה מעשנת, ומספר מבנים המדמים את צריפי המחנות והמשרפות ומייצגים את תעשיית ההשמדה. מימין פיסל בזם דג מכונף וערוף ראש. זהו מוטיב חוזר ביצירתו המסמל את הקרבן היהודי, את אובדן החיים בשילוב עם המלאך שקצרה ידו מלהושיע.
               הדג – הקרבן, הוא גם נקודת החיבור בין חלקו הראשון של התבליט לחלקו השני – "הגבורה". חלק זה מתאר את הגבורה שהתגלמה בהתקוממות נגד הנאצים. שימו לב לבניינים העולים באש, דוגמת בתי גטו ורשה שהוצתו במהלך המרד. ניתן לראות דמות גבר, הפוכה גם היא, האוחזת בידה האחת במעין כידון או כלי נשק העולה בלהבות, אולם ידו השנייה מחזיקה סולם, מעין סולם יעקב, סמל לתקווה ולכיסופים לארץ ישראל.
               חלקה השלישי של היצירה מתאר את ההעפלה לארץ ישראל באמצעות אדם השט בסירה. האדם מלווה במלאך המגן עליו. לסירה משוטים המייצגים כלי פולחן מבית המקדש - סמל לגאולה. הגה הספינה, המחבר בין חלק זה של התבליט לחלקו הקודם, מעוצב כשופר המסמל גם הוא את פתיחת שערי השמים וגאולת העם היהודי. הביטו בחרטום הספינה אליו מחובר חץ המצביע לעבר חלקה הרביעי והאחרון של היצירה.
               חלק זה של הפסל מייצג את הקמת מדינת ישראל. הביטו בדמות האריה הניצב איתן על רגליו, ספק נוגע ברגלו הימנית במשוט ספינת המעפילים. עיניו של האריה דומעות, לאות אבל על קרבנות השואה, אך הוא חזק ויציב מתמיד. על גבו ניצבים בגאון הפמוטים, הפעם דולקים ומתנשאים אל על, כשביניהם צומח שיח הצבר, המסמל את הדור החדש שנולד בארץ ואת התקווה לעתיד.
                </div>,
                vocalSrc: BezemAudio
            },
            CattleCar: {
                label: 'אנדרטת הקרון',
                description: <div><p>קרון רכבת גרמני ששימש להובלת יהודים למחנות ההשמדה וניתן ליד ושם על ידי ממשלת פולין‮. ‬האנדרטה נבנתה כזיכרון לשילוחים אל מחנות ההשמדה‮. ‬על הקיר הסמוך לאנדרטה‮, ‬חרוטה עדותו של ניצול השואה אברהם קשפיצקי‮.</p><p>אדריכל‮ - ‬משה ספדיה‮.</p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            Entrance: {
                label: 'מבואה'
            }


        },
        info: {
            goTo: 'לאן אתם מעוניינים להמשיך?',
        },
        navBar: {
            home: 'דף הבית',
            shareAMoment: "שתפו את החברים",
            map: "מפה של יד ושם",
            webSite: "אתר האינטרנט של יד ושם"
        },
        goTo: {
            meters: "מ'"
        },
        map: {
            title: 'מפת יד ושם',
            back: 'חזור'
        },

    },
    English: {
        path: 'En',
        coverPage: {
            title: 'Campus Tour Guide',
            imgSrc: CoverPageLogoEnglish,
            next: 'next'
        },
        locationListPage: {
            placeHolderSearch: 'search'
        },
        locationsList: {
            GlidNandor: {
                label: 'Glid Nandor',
                description: <div><p>An imposing, tent-like basalt structure that allows visitors to pay their respects to the memories of the martyred dead. On the floor are the names of 22 Nazi murder sites - extermination and concentration camps, transit camps and killing sites - chosen from the hundreds of murder sites that existed throughout Europe. A memorial flame burns continuously, next to a crypt containing ashes of victims brought from the extermination camps. </p> <p>Architect- Aryeh Elhanani ,Eternal Flame- Kosso Eloul ,Southern gate- David Palombo Western gate: Bezalel Schatz </p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            WarsawGhetto: {
                label: 'Warsaw Ghetto Square',
                description: <div><p>The Wall of Remembrance consists of two sculptures set in a wall of red bricks, which symbolize the ghetto walls. In the center of the first sculpture, entitled "The Warsaw Ghetto Uprising", stands the leader of the uprising, Mordechai Anielewicz. The second sculpture, entitled "The Last March", depicts the mass deportation of the Jews to the death camps.</ p><p>Sculptor: Nathan Rapoport</p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            FromHolocausttoRebirth: {
                label: 'From Holocaust to Rebirth',
                description: <div><p>This unique memorial, hollowed out from an underground cavern, is a tribute to the approximately 1.5 million Jewish children who perished during the Holocaust. Walking through the memorial, the visitor will hear the names of murdered children, their ages and countries of origin in the background.</p><p>Architect: Moshe Safdie</p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            CattleCar: {
                label: 'Cattle Car',
                description: <div><p>The Memorial to the Deportees was established at Yad Vashem as a monument to the millions of Jews herded onto cattle-cars and transported from all over Europe to the extermination camps. An original German cattle-car given to Yad Vashem by the Polish authorities stands at the center of the memorial site.  On the adjacent wall, the testimony of survivor Avraham Krzepicki is inscribed. </p><p>Architect: Moshe Safdie</p></div>,
                vocalSrc: yehudah_poliker_efer_veavak
            },
            Entrance: {
                label: 'Entrence'
            }

        },
        info: {
            goTo: 'Where do you want to go next?',
        },
        navBar: {
            home: 'Home',
            shareAMoment: "Share a moment",
            map: "Yad Vashem map",
            webSite: "Yad Vashem on the web"
        },
        goTo: {
            meters: 'm'
        },
        map: {
            title: 'Yad Vashem map',
            back: 'back'
        },

    },
    // object for things that stay the same between languages such as images
    Globals: {
        locationsList: {
            WarsawGhetto: {
                imgSrc: [WarsawGhetto, WarsawGhetto1],
                handicap: true,
                wheelchair: true,
                id: 11
            },
            GlidNandor: {
                imgSrc: [GlidNandor],
                handicap: false,
                wheelchair: false,
                id: 12
            },
            FromHolocausttoRebirth: {
                imgSrc: [FromHolocausttoRebirth, FromHolocausttoRebirth1],
                handicap: true,
                wheelchair: false,
                id: 13
            },
            CattleCar: {
                imgSrc: [CattleCar],
                handicap: true,
                wheelchair: true,
                id: 14
            }
        },
    },
}
