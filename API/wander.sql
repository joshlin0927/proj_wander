-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-11-05 20:28:10
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `wander`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `sid` int(11) NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `artical_category` varchar(4) NOT NULL,
  `artical_title` text NOT NULL,
  `artical_image` text NOT NULL,
  `artical_content` text NOT NULL,
  `created_date` date NOT NULL,
  `likes` int(11) DEFAULT NULL,
  `hyperlink` varchar(500) NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`sid`, `teacher_sid`, `artical_category`, `artical_title`, `artical_image`, `artical_content`, `created_date`, `likes`, `hyperlink`, `updated`) VALUES
(93, '1', '異國節慶', '燃燒自我的限時烏托邦　美國火燒人慶典', 'c351da3ca83e2edc7bf911878ec4b5592982a394.jpg', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。', '2021-08-22', 300, 'https://www.youtube.com/embed/UiKcdWUpvrY', '2021-08-22 05:50:13'),
(95, '1', '異國節慶', '台灣天燈節 Lantern Festival', '5c9439d1ab879683fe078b39084d16c348e1cbdc.jpg', '天燈亦稱孔明燈，相傳為三國時期諸葛亮的發明，起初是為了傳遞軍情之用，與烽火台有異曲同工之妙，也被公認為熱氣球的始祖。在清道光年間傳至臺灣，每年元宵節是春耕季節之始，先民藉由施放天燈向上天祈求一年的希望，因昔日娶媳婦就是為了「添丁」來增加勞力，所以都會在廟宇中祈福放天燈，並在天燈上寫上「早生貴子」、「五穀豐收」之類的祈福吉祥語，是而名為「天燈」。', '2021-08-18', 585, 'https://www.youtube.com/embed/FFwrS7UtACw', '2021-08-22 05:56:23'),
(96, '2', '異國節慶', '日本 女兒節(雛祭り)', '045c06388e18e060f452506c423dd354375b164a.jpg', '三月三日是日本女兒節，又稱人偶節、上巳（じょうし/じょうみ）、雛祭（雛祭り）。屬於“五節句”之一的“桃之節句”（桃の節句）本來在農曆的三月初三，明治維新後改為西曆3月3日。而男孩節則定於端午節(5月5日)。\r\n\r\n女兒節當天雖然不是日本國定假日，但家中的成員大都盡量聚在一起祝福女孩子健康平安的長大成人。父母會為女兒設置階梯狀的陳列台，由上至下，擺放穿著日式和服的娃娃，這種娃娃在日本稱為雛人形。為慶賀這個節日每個有女孩子的日本家庭都會擺放「女兒節人偶」，以祈求女兒幸福健康的成長。女兒節的做工講究、服飾華麗的人偶娃娃也成為日本人最喜愛的人偶之一，特別是富有家庭，會為女兒準備由名匠製作的漂亮人偶娃娃。', '2021-08-23', 474, 'https://www.youtube.com/embed/uFS9RZXu3YA', '2021-08-22 05:58:14'),
(97, '2', '專欄文章', '讀國文，從來就不是為了學修辭...課本裡，藏著「上頭」不願被人記得的事', '4559f1ce11b5814c1352332e03104abe5b4cd640.jpg', '「國語文」是一個領域，是「國語」和「國文」的混合。我們現在所通行的這套語文系統，是1945年中華民國政府帶來的。在此之前的日本時代，台灣流行的是日語、台語、客語和原住民各族的語言；有部分的漢人也會寫中文字，他們稱之為「漢文」，不管是文言漢文還是白話漢文，在發音的時候都是用台語來唸的。1945年，國民政府接收台灣，成立了「國語推行委員會」，才開始一系列當代「國語」的建構工程。', '2021-08-22', 300, 'https://www.youtube.com/embed/ZeMyDnWY7w0', '2021-08-22 05:59:44'),
(98, '3', '專欄文章', '日語是由漢字(漢語)以及平假名(和語)、片假名(外來語)所組成的語言', '25807ac794f805b17e1c8978e323795a45917a3f.jpg', '「五十音」是將日語中的平假名、片假名以母音為基礎縱排五字，子音橫排為十字所交叉組合成的五十音。 最早是為了標註漢字的音而形成的，其平假名是漢字的草書演變過來， 而片假名則使用了漢字的偏旁部首。\r\n\r\n \r\n\r\n原本日本是沒有文字的，一直到和中國有了交流之後才引進中國的漢字，後來發展成「萬葉假名」，一直到後來簡化為平假名和片假名。萬葉假名是來自於「萬葉集」，且一個漢字僅有一個音，譬如「久佐麻久良」讀作「ku-sa-ma-ku-ra」,意思是「草枕」，看起來很複雜又麻煩，無論是閱讀還是書寫都造成了很大的障礙，因此日本人開始嘗試將它簡化。抽取漢字部首，簡化萬頁假名的筆畫，這就是「片假名」。現今片假名多用於外來語，並不是日本人常用的字母。\r\n\r\n \r\n\r\n古代日本女性無法接受正規教育，就像中國古代的「女子無才便是德」。女孩子是不能學習漢字及片假名的。因此她們創造出了另一種字母系統，也就是現今日文的主流「平假名」 (又稱為「女手」、「女文字」)。相較於片假名剛硬、單調的筆畫，平假名以圓滑、柔潤取勝，字型較優雅、書寫容易，迅速在日本平安女性之間流傳，進而創造出傳奇的「平安文學」。後來為了讓女性也能看的懂私信以及政府公文，而改用平假名書寫，漸漸的平假名成為日本語的主流，而片假名則退居二線成為外來語的代名詞。對於發明文字，日本女性有著非常大的功勞，例如紫式部的《源氏物語》(日本歷史上第一部長篇小說)，到現今一直都廣為人知。', '2021-08-22', 50, 'https://www.youtube.com/embed/QWGUclg-Q2M', '2021-08-22 06:02:29'),
(99, '3', '專欄文章', '英文二十六個字母的起源', '16d6a89c234d0fd9f45dbd24ceab761467c59f2e.jpg', '腓尼基語是古代腓尼基人使用的語言文字。腓尼基是古代中東的一個民族，起源於今巴勒斯坦附近。腓尼基人精通航海和貿易，是一個商業民族。傳說世界上最早的字母文字就是由腓尼基人發明出來的。腓尼基語共使用22個字母，古希臘人在腓尼基字母的基礎上創造了希臘字母。在希臘字母的基礎上，又形成了羅馬及其周圍地區拉丁人的拉丁字母。如今歐洲各國的拼音字母差不多都是從希臘字母和拉丁字母演變而來的。因此可以說，腓尼基字母文字是歐洲國家字母文字的始祖。', '2021-08-22', 555, 'https://www.youtube.com/embed/iXj2eZkMNtQ', '2021-08-22 06:05:16'),
(100, '4', '爆紅話題', '線上版高級私人俱樂部！語音社交APP「clubhouse」爆紅', '52b5aa34df7b03ef47b8e9ef28f1dc1f4a4e5f7e.jpg', '在社交媒體移民潮暫歇之際，外媒報導，一款名為「Clubhouse」的社群軟體近期迅速竄紅，從西方美國矽谷新創圈一路燒到東方香港！該App主打語音功能，必須收到其他用戶寄送的邀請碼才能註冊使用，且只有iOS版，門檻不低，但加入後就有機會和全球首富馬斯克在內的多位名人線上「開聊」，在網路上掀起話題。\r\n\r\n綜合外媒報導，去年4月推出的Clubhouse以語音功能為賣點，用戶註冊後，可以加入不同的聊天室參與話題或單純聆聽，也可以建立自己的聊天室。初期以矽谷新創投資圈為主要客群，後來平台內容開始多元化，用戶只要遇上自己有興趣的話題，隨時可以按鍵發言。\r\n\r\n目前Clubhouse上的名人除了馬斯克外，據聞還有美國知名主持人歐普拉（Oprah）、喜劇泰斗凱文哈特（Kevin Hart）、德國拜仁球星穆勒、奧斯卡金像獎最佳男配角傑瑞德（Jared Leto）等人，被譽為「線上版高級私人俱樂部」。', '2021-08-17', 2525, 'https://www.youtube.com/embed/kT0NZbXnbTE', '2021-08-22 15:23:56'),
(101, '4', '爆紅話題', '被韓劇輾壓！日劇跌落神壇關鍵是什麼？網精闢分析３理由', '139166cafcff98e8bf5b280e12e6aebba0284a45.png', '韓劇崛起不只靠顏值！「配音」是關鍵\r\n反觀韓劇，鄉民們認為製作經費、演員外型以及多元的題材都是取勝關鍵，「韓劇有能拍出深度的，就算是無腦的人家也有俊男美女」、「韓劇題材其實很多，殭屍、災難、穿越、刑偵都能混合」、「韓劇經費突破天際」。\r\n\r\n另外還有網友提到「中文配音」也是韓劇打入台灣市場的重要原因，早期的韓國肥皂劇多以中文配音播出，吸引不少婆媽族群收看，跟著媽媽一起看的女兒們也深受影響，隨著時間推進和韓劇題材的進步，才造就了現在主打年輕族群的韓劇天下！', '2021-08-18', 1515, 'https://www.youtube.com/embed/WygHZyE3ufQ', '2021-08-22 15:24:44'),
(102, '5', '爆紅話題', '東奧馬王「聖男孩」不配合？選手爆哭照瘋傳　網憂馬遭安樂死⋯官方回應曝光', '40f9e05117df9b7e411dbd22bbf1a93d6e645384.jpg', '在東京奧運現代五項中被看好奪金的德國選手安妮卡·史勒（Annika Schleu），進行馬術障礙賽時，抽中馬匹「聖男孩」（Saint Boy），賽程中馬兒似乎配合度低，沒有跨越障礙，導致她成績最後是0分，當場直接痛哭模樣也被拍下，遭到眾多網友熱議。看到這樣的狀況，也引起民眾擔心起「聖男孩」會不會被執行安樂死，所幸國際現代五項總會（UIPM）已在推特聲明，「聖男孩」已順利返回家鄉。', '2021-08-18', 145, 'https://www.youtube.com/embed/NQazLXs-J4Q', '2021-08-22 15:26:03'),
(103, '5', '世界新聞', '令台灣人感動! 日本參議院全體起立通過支持台灣參加WHA', 'dadbf031831e9d00c6437a23898053049d15bf77.jpg', '根據日本放送協會NHK的報導，台灣在中國及其他國家反對之下，被拒絕以觀察員身分參加WHA世界衛生大會。在6月11日出現令台灣人感動的畫面，日本參議院全體起立一致通過，呼籲各國能認可台灣參加WHA。\r\n\r\n日本參議院在決議時指出，「為終結傳染病，必須共享世界各地在公衛上取得成果的地區有用的知識與經驗」，「台灣作為強化檢疫的先驅，不能參加WHA是全球在國際防疫上的損失，這是各國的共識」，希望相關國家明年起能夠認可台灣參與。', '2021-08-16', 100000000, 'https://www.youtube.com/embed/NIVPCHE34sI', '2021-08-22 15:31:09');

-- --------------------------------------------------------

--
-- 資料表結構 `article_inter`
--

CREATE TABLE `article_inter` (
  `sid` int(11) NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `artical_category` varchar(4) NOT NULL,
  `artical_title` text NOT NULL,
  `artical_image` text NOT NULL,
  `artical_content` text NOT NULL,
  `created_date` date NOT NULL,
  `text` text DEFAULT NULL,
  `hyperlink` varchar(500) NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `article_inter`
--

INSERT INTO `article_inter` (`sid`, `teacher_sid`, `artical_category`, `artical_title`, `artical_image`, `artical_content`, `created_date`, `text`, `hyperlink`, `updated`) VALUES
(93, '1', '熱門影集', '燃燒自我的限時烏托邦　美國火燒人慶典', '01.png', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。', '2021-08-22', '300', 'https://www.youtube.com/embed/UiKcdWUpvrY', '2021-08-22 05:50:13'),
(95, '1', '熱門影集', '東城奇案', '09.jpg', 'HBO推出的美國犯罪迷你影集東城奇案（Mare of Easttown），由《一夜狂奔》編劇布萊德英格爾斯比（Brad Ingelsby）主創並撰寫全集數劇本。該劇播出後獲得一片好評，爛番茄也給出94%的新鮮度！\n\n劇情設定在賓夕法尼亞州德拉瓦縣的一座小鎮，警探梅珥希恩是當地的風雲人物，她在25年前幫助高中籃球隊奪得冠軍。梅珥在面對個人生活危機的同時，著手調查發生在當地的一宗謀殺案件：一名年輕的單身媽媽被發現陳屍於溪水之中。當前她除了調查謀殺案，還需持續追蹤另一名女孩的失蹤案件，此外還要應對離婚、自殺身亡的兒子、吸毒成癮的兒媳以及孫子的監護權等個人問題。\n因漸凍人朋友需求，無心插柳跨足輔具領域\n森思眼動的創業故事，可說是無心插柳柳成蔭。公司創立之初，森思眼動計劃投入電商市場，運用眼動科技分析大眾如何閱讀電商網站，並蒐集數據以幫助廣告商最有效率地規劃廣告版位。', '2021-08-18', '585', 'https://www.youtube.com/embed/FFwrS7UtACw', '2021-08-22 05:56:23'),
(96, '2', '熱門影集', '不朽者', '08.jpeg', '《不朽者》（The Nevers）是一部美國科幻影集，由《復仇者聯盟》（The Avengers）導演喬斯溫登（Joss Whedon）進行編導，第一季分為上下兩部（分別6集，共12集）播出。\n\n劇情時間背景設定於維多利亞時代的英國倫敦，一群女性獲得了前所未見的超能力，而這些擁有力量的女性團結起來並肩作戰打擊惡勢力，執行可能會改變世界的任務。女兒節當天雖然不是日本國定假日，但家中的成員大都盡量聚在一起祝福女孩子健康平安的長大成人。父母會為女兒設置階梯狀的陳列台，由上至下，擺放穿著日式和服的娃娃，這種娃娃在日本稱為雛人形。為慶賀這個節日每個有女孩子的日本家庭都會擺放「女兒節人偶」，以祈求女兒幸福健康的成長。女兒節的做工講究、服飾華麗的人偶娃娃也成為日本人最喜愛的人偶之一，特別是富有家庭，會為女兒準備由名匠製作的漂亮人偶娃娃。', '2021-08-23', '474', 'https://www.youtube.com/embed/uFS9RZXu3YA', '2021-08-22 05:58:14'),
(97, '2', '熱門影集', '亞森羅蘋1&2', '07.jpeg', '法國推理驚悚網路影集《亞森羅蘋》（Lupin）總共有十集，前五集於2021年1月播出，後五集於2021年6月播出，該劇上線第一個月內就有7,000萬用戶的收看，成為Netflix史上收視率最高的非英語影集！\n\n劇情講述亞森迪歐是一位來到法國謀生的塞內加爾移民的獨子，亞森的父親被他的有錢有勢的老闆佩里格尼陷害偷了鑽石項鍊，最終含冤在獄中上吊自殺，從此亞森變成了孤兒。25年過去，亞森收到父親留給他的一本關於怪盜紳士亞森羅蘋的小說所啟發，亞森利用他的人格魅力，盜竊技術和偽裝等手段計劃揭露佩里格尼的罪行。', '2021-08-22', '300', 'https://www.youtube.com/embed/ZeMyDnWY7w0', '2021-08-22 05:59:44'),
(98, '3', '熱門影集', '城市特警隊', '06.jpg', '《城市特警隊》（The Watch）是一部爆笑驚悚影集，改編自英國奇幻文學大師泰瑞普萊契（Terry Pratchett）的《碟形世界》（Discworld）系列小說。\n\n劇情描述一群怪咖組成的城市警衛隊，巨人、狼人、巫師和其他超現實英雄致力於對抗復活巨龍的邪惡陰謀。他們在鼓起勇氣拯救世界的過程中，體驗到連自己都難以置信的驚險經歷。 \n\n原本日本是沒有文字的，一直到和中國有了交流之後才引進中國的漢字，後來發展成「萬葉假名」，一直到後來簡化為平假名和片假名。萬葉假名是來自於「萬葉集」，且一個漢字僅有一個音，譬如「久佐麻久良」讀作「ku-sa-ma-ku-ra」,意思是「草枕」，看起來很複雜又麻煩，無論是閱讀還是書寫都造成了很大的障礙，因此日本人開始嘗試將它簡化。抽取漢字部首，簡化萬頁假名的筆畫，這就是「片假名」。現今片假名多用於外來語，並不是日本人常用的字母。\n\n \n\n古代日本女性無法接受正規教育，就像中國古代的「女子無才便是德」。女孩子是不能學習漢字及片假名的。因此她們創造出了另一種字母系統，也就是現今日文的主流「平假名」 (又稱為「女手」、「女文字」)。相較於片假名剛硬、單調的筆畫，平假名以圓滑、柔潤取勝，字型較優雅、書寫容易，迅速在日本平安女性之間流傳，進而創造出傳奇的「平安文學」。後來為了讓女性也能看的懂私信以及政府公文，而改用平假名書寫，漸漸的平假名成為日本語的主流，而片假名則退居二線成為外來語的代名詞。對於發明文字，日本女性有著非常大的功勞，例如紫式部的《源氏物語》(日本歷史上第一部長篇小說)，到現今一直都廣為人知。', '2021-08-22', '50', 'https://www.youtube.com/embed/QWGUclg-Q2M', '2021-08-22 06:02:29'),
(99, '3', '熱門影集', '末日列車', '05.jpeg', '《末日列車》影集版的風格與電影版差異甚大，後者專注於描繪末日後的世界，並藉由嚴重的社會階級制度，來反諷完美烏托邦社會背後的醜陋真相，而前者雖然仍是圍繞在「階級戰爭」與「革命」的核心主題，但重心明顯是放在殺人命案的推理過程，末日的元素成為裝飾用的皮，電影版中強烈的黑色諷刺也消失殆盡。如有興趣可加碼閱讀：《末日列車》Netflix影評｜影集少了末世界之感, 多了懸疑驚悚的推理元素！', '2021-08-22', '555', 'https://www.youtube.com/embed/iXj2eZkMNtQ', '2021-08-22 06:05:16'),
(100, '4', '熱門影集', '三人要守密兩人得死去', '04.jpeg', '《三人要守密，兩人得死去》為2021年上映Netflix原創驚悚英劇，改編自2018年出版同名驚悚小說，故事在敘述一名單親媽媽與身為精神科醫師的老闆展開婚外情，但同時又與他神祕的妻子愈走愈近，一場扭曲的心理遊戲就此上演，到底這個畸形的三角戀情該如何發展呢？他們彼此間又相互安著什麼樣的心態呢？\n綜合外媒報導，去年4月推出的Clubhouse以語音功能為賣點，用戶註冊後，可以加入不同的聊天室參與話題或單純聆聽，也可以建立自己的聊天室。初期以矽谷新創投資圈為主要客群，後來平台內容開始多元化，用戶只要遇上自己有興趣的話題，隨時可以按鍵發言。\n\n目前Clubhouse上的名人除了馬斯克外，據聞還有美國知名主持人歐普拉（Oprah）、喜劇泰斗凱文哈特（Kevin Hart）、德國拜仁球星穆勒、奧斯卡金像獎最佳男配角傑瑞德（Jared Leto）等人，被譽為「線上版高級私人俱樂部」。', '2021-08-17', '2525', 'https://www.youtube.com/embed/kT0NZbXnbTE', '2021-08-22 15:23:56'),
(101, '4', '熱門影集', '太陽召喚', '03.jpg', '《太陽召喚》改編自李芭度葛（Leigh Bardugo）的《太陽召喚》系列小說和《烏鴉六人幫》系列小說，故事背景建立在一個架空的世界，是一個被巨大黑幕隔絕為兩部分，一名孤兒製圖師阿利娜史塔科夫（Alina Starkov）在一次穿越黑幕時，遭遇怪物的襲擊而意外覺醒了自身的能力，發現自己原來是格里沙，更是傳說中的「太陽召喚者」，她能產生出極強的陽光，將黑幕給消散，將世界給二合而為一，但一股黑暗勢力不允許此事發生，決定聯手阻止阿利娜！', '2021-08-18', '1515', 'https://www.youtube.com/embed/WygHZyE3ufQ', '2021-08-22 15:24:44'),
(102, '5', '熱門影集', '后翼棄兵', '02.jpg', '后翼棄兵》開局懸疑緊湊，整個故事節奏明快、一直到結局更是感動人心。貝絲最後體會到，無論人生和棋局上面對什麼困難，還是要結合自己的天才及努力來做好自己，即使親生父母、養母、男人一個個離她而去，她卻在棋盤上找到了自我，從孤獨黑暗的內心解放出來，她發現，自己從來不是只有一個人，身邊還有許多愛她、珍惜她、值得她依靠的朋友，不斷鼓勵著她、幫助她自由自在地走出棋局的每一步，並且迎來和自我的和解。', '2021-08-18', '145', 'https://www.youtube.com/embed/NQazLXs-J4Q', '2021-08-22 15:26:03'),
(103, '1', '熱門影集', '黑道律師文森佐', '01.png', '此劇講述因組織內部糾紛而從義大利逃到韓國的黑手黨顧問文森佐·卡薩諾（宋仲基飾），在遇上律師洪車瑛（全汝彬飾）後，兩人以黑道的方式實現正義的故事。\n日本參議院在決議時指出，「為終結傳染病，必須共享世界各地在公衛上取得成果的地區有用的知識與經驗」，「台灣作為強化檢疫的先驅，不能參加WHA是全球在國際防疫上的損失，這是各國的共識」，希望相關國家明年起能夠認可台灣參與。', '2021-08-16', '100000000', 'https://www.youtube.com/embed/NIVPCHE34sI', '2021-08-22 15:31:09');

-- --------------------------------------------------------

--
-- 資料表結構 `article_pop`
--

CREATE TABLE `article_pop` (
  `sid` int(11) NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `artical_category` varchar(4) NOT NULL,
  `artical_title` text NOT NULL,
  `artical_image` text NOT NULL,
  `artical_content` text NOT NULL,
  `created_date` date NOT NULL,
  `text` text DEFAULT NULL,
  `hyperlink` varchar(500) NOT NULL,
  `updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `article_pop`
--

INSERT INTO `article_pop` (`sid`, `teacher_sid`, `artical_category`, `artical_title`, `artical_image`, `artical_content`, `created_date`, `text`, `hyperlink`, `updated`) VALUES
(93, '1', '異國節慶', '燃燒自我的限時烏托邦', '11.jpg', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。', '2021-08-22', '300', 'https://www.youtube.com/embed/UiKcdWUpvrY', '2021-08-22 05:50:13'),
(95, '1', '專欄文章', '眼動科學，為失語者開啟一扇窗', '09.jpg', '俗話說，眼睛是靈魂之窗，台灣一家科技新創「森思眼動」，用眼動科技為失語者開啟一扇溝通的窗，讓情感得以表達、靈魂得以釋放。\n\n因漸凍人朋友需求，無心插柳跨足輔具領域\n森思眼動的創業故事，可說是無心插柳柳成蔭。公司創立之初，森思眼動計劃投入電商市場，運用眼動科技分析大眾如何閱讀電商網站，並蒐集數據以幫助廣告商最有效率地規劃廣告版位。', '2021-08-18', '585', 'https://www.youtube.com/embed/FFwrS7UtACw', '2021-08-22 05:56:23'),
(96, '2', '異國節慶', '燃燒自我的限時烏托邦　美國火燒人慶典', '11.jpg', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。女兒節當天雖然不是日本國定假日，但家中的成員大都盡量聚在一起祝福女孩子健康平安的長大成人。父母會為女兒設置階梯狀的陳列台，由上至下，擺放穿著日式和服的娃娃，這種娃娃在日本稱為雛人形。為慶賀這個節日每個有女孩子的日本家庭都會擺放「女兒節人偶」，以祈求女兒幸福健康的成長。女兒節的做工講究、服飾華麗的人偶娃娃也成為日本人最喜愛的人偶之一，特別是富有家庭，會為女兒準備由名匠製作的漂亮人偶娃娃。', '2021-08-23', '474', 'https://www.youtube.com/embed/uFS9RZXu3YA', '2021-08-22 05:58:14'),
(97, '2', '熱門影集', '紐約新醫革命', '07.jpeg', '《紐約新醫革命》是2018年上映NBC美國影集，後來Netflix買下國際版權後，一在Netflix上架後便瞬間登上熱門榜冠軍，目前播至第三季，NBC已經續訂至第五季，影集改編自艾瑞克曼海默（Eric Manheimer）的小說《12病人：貝爾維尤醫院的生死》（Twelve Patients: Life and Death at Bellevue Hospital），故事在敘述醫生Max到一家公家醫院擔任醫療主任一職，打算在這家醫院大破大立，進行大規模的醫療改革，優化繁文縟節的行政手續，打破迂腐的官僚體制，為病人提供最優質的醫療服霧，但卻碰上無比巨大的阻礙，更是擋到一些高層人們的利益，無依無靠的Max到底該如何是好呢？', '2021-08-22', '300', 'https://www.youtube.com/embed/ZeMyDnWY7w0', '2021-08-22 05:59:44'),
(98, '3', '專欄文章', '讀國文，從來就不是為了修辭', '06.jpg', '「國語文」是一個領域，是「國語」和「國文」的混合。我們現在所通行的這套語文系統，是1945年中華民國政府帶來的。在此之前的日本時代，台灣流行的是日語、台語、客語和原住民各族的語言；有部分的漢人也會寫中文字，他們稱之為「漢文」，不管是文言漢文還是白話漢文，在發音的時候都是用台語來唸的。1945年，國民政府接收台灣，成立了「國語推行委員會」，才開始一系列當代「國語」的建構工程。\n \n\n原本日本是沒有文字的，一直到和中國有了交流之後才引進中國的漢字，後來發展成「萬葉假名」，一直到後來簡化為平假名和片假名。萬葉假名是來自於「萬葉集」，且一個漢字僅有一個音，譬如「久佐麻久良」讀作「ku-sa-ma-ku-ra」,意思是「草枕」，看起來很複雜又麻煩，無論是閱讀還是書寫都造成了很大的障礙，因此日本人開始嘗試將它簡化。抽取漢字部首，簡化萬頁假名的筆畫，這就是「片假名」。現今片假名多用於外來語，並不是日本人常用的字母。\n\n \n\n古代日本女性無法接受正規教育，就像中國古代的「女子無才便是德」。女孩子是不能學習漢字及片假名的。因此她們創造出了另一種字母系統，也就是現今日文的主流「平假名」 (又稱為「女手」、「女文字」)。相較於片假名剛硬、單調的筆畫，平假名以圓滑、柔潤取勝，字型較優雅、書寫容易，迅速在日本平安女性之間流傳，進而創造出傳奇的「平安文學」。後來為了讓女性也能看的懂私信以及政府公文，而改用平假名書寫，漸漸的平假名成為日本語的主流，而片假名則退居二線成為外來語的代名詞。對於發明文字，日本女性有著非常大的功勞，例如紫式部的《源氏物語》(日本歷史上第一部長篇小說)，到現今一直都廣為人知。', '2021-08-22', '50', 'https://www.youtube.com/embed/QWGUclg-Q2M', '2021-08-22 06:02:29'),
(99, '3', '專欄文章', '寬容的公司文化', '05.jpeg', '寬容，是指對於過錯的原諒。當組織強調創新時，員工的創造力與創新動機，有可能會帶來公司財務損失，而寬容的公司文化則能夠讓員工可以持續進行創新活動，以達成最後的成功。寬容另一方面代表的是修復式正義的概念，在考量所有相關人員或事物的損害與利益下，寬容可能是考慮的選項。然而，寬容的風險，即在於當受害者的地位未能被恢復，而加害者的權力依然無損。當組織內的寬容氣氛，是用來保護有特殊地位或關係的人員時，公司的寬容則可能會加深組織內部的不公平感受，而減損公司的整體效能。公司可以進行檢視，是否公司的寬容政策，是一視同仁，沒有分別？是否著眼於照顧所有人員的需要，而非偏坦特定當事人？是否提升員工的組織公平感受，而非減損？', '2021-08-22', '555', 'https://www.youtube.com/embed/iXj2eZkMNtQ', '2021-08-22 06:05:16'),
(100, '4', '專欄文章', '職場中的「專業精神」、「人情」', '04.jpeg', '從英美文化背景，所發展的現代企業組織原型，其中一個很核心的內容，就是認為組織中的成員，在其職位上應表現出「專業精神」。專業精神跟能力上的專業表現，是不同的內容，而專業精神特別是指員工不應該把個人需求與人際關係，帶入職場活動之中。這是不是說，在公司裡面不應該交朋友，技術上來說，是的。同事之間的關係，應該就是基於工作規範與職責，而非基於私交或人情。所以，在工作上，就不應該談私事，也不應該用工作上的時間，建立個人的人際關係，或是使用私人的人際關係。這樣的公司氣氛感覺上可能會非常冷淡，而且無趣，而事實上，公司並不是請員工在公司裡面發現趣味的。然而，在重視專業精神的同時，也強調對人的尊重與善意，這不是針對特定的個人或對象，而是基於對人的基本價值，所展現的溫暖。所以，如果你失戀了情緒很不好，上班前必須自行處理好這些情緒，不應該把這些情緒帶入工作環境，要不然就應該自已請假，這是專業的展現。\n\n綜合外媒報導，去年4月推出的Clubhouse以語音功能為賣點，用戶註冊後，可以加入不同的聊天室參與話題或單純聆聽，也可以建立自己的聊天室。初期以矽谷新創投資圈為主要客群，後來平台內容開始多元化，用戶只要遇上自己有興趣的話題，隨時可以按鍵發言。\n\n目前Clubhouse上的名人除了馬斯克外，據聞還有美國知名主持人歐普拉（Oprah）、喜劇泰斗凱文哈特（Kevin Hart）、德國拜仁球星穆勒、奧斯卡金像獎最佳男配角傑瑞德（Jared Leto）等人，被譽為「線上版高級私人俱樂部」。', '2021-08-17', '2525', 'https://www.youtube.com/embed/kT0NZbXnbTE', '2021-08-22 15:23:56'),
(101, '4', '熱門影集', '后翼棄兵', '03.jpg', '《后翼棄兵》開局懸疑緊湊，整個故事節奏明快、一直到結局更是感動人心。貝絲最後體會到，無論人生和棋局上面對什麼困難，還是要結合自己的天才及努力來做好自己，即使親生父母、養母、男人一個個離她而去，她卻在棋盤上找到了自我，從孤獨黑暗的內心解放出來，她發現，自己從來不是只有一個人，身邊還有許多愛她、珍惜她、值得她依靠的朋友，不斷鼓勵著她、幫助她自由自在地走出棋局的每一步，並且迎來和自我的和解。', '2021-08-18', '1515', 'https://www.youtube.com/embed/WygHZyE3ufQ', '2021-08-22 15:24:44'),
(102, '5', '專欄文章', '英文二十六個字母的起源', '02.jpg', '腓尼基語是古代腓尼基人使用的語言文字。腓尼基是古代中東的一個民族，起源於今巴勒斯坦附近。腓尼基人精通航海和貿易，是一個商業民族。傳說世界上最早的字母文字就是由腓尼基人發明出來的。腓尼基語共使用22個字母，古希臘人在腓尼基字母的基礎上創造了希臘字母。在希臘字母的基礎上，又形成了羅馬及其周圍地區拉丁人的拉丁字母。如今歐洲各國的拼音字母差不多都是從希臘字母和拉丁字母演變而來的。因此可以說，腓尼基字母文字是歐洲國家字母文字的始祖。', '2021-08-18', '145', 'https://www.youtube.com/embed/NQazLXs-J4Q', '2021-08-22 15:26:03'),
(103, '1', '熱門影集', '黑道律師文森佐', '01.png', '此劇講述因組織內部糾紛而從義大利逃到韓國的黑手黨顧問文森佐·卡薩諾（宋仲基飾），在遇上律師洪車瑛（全汝彬飾）後，兩人以黑道的方式實現正義的故事。\n日本參議院在決議時指出，「為終結傳染病，必須共享世界各地在公衛上取得成果的地區有用的知識與經驗」，「台灣作為強化檢疫的先驅，不能參加WHA是全球在國際防疫上的損失，這是各國的共識」，希望相關國家明年起能夠認可台灣參與。', '2021-08-16', '100000000', 'https://www.youtube.com/embed/NIVPCHE34sI', '2021-08-22 15:31:09');

-- --------------------------------------------------------

--
-- 資料表結構 `art_messenger`
--

CREATE TABLE `art_messenger` (
  `sid` int(11) NOT NULL,
  `ar_sid` int(11) DEFAULT NULL,
  `st_sid` int(11) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `st_pictuer` varchar(255) DEFAULT NULL,
  `messenger` varchar(255) NOT NULL,
  `great` int(11) DEFAULT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `art_messenger`
--

INSERT INTO `art_messenger` (`sid`, `ar_sid`, `st_sid`, `nickname`, `st_pictuer`, `messenger`, `great`, `created_date`) VALUES
(8, 21, 102, 'Mal', '3042a221-0aa4-437d-acea-8669b3e90908.jpg', '111', 0, '2021-10-30 19:17:22'),
(9, 95, 19, '이준기', 'e8157cd9-f0d1-4a98-adf8-f8d54cc2f95e.jpg', '36363', 0, '2021-10-31 16:53:37'),
(10, 96, 18, 'An', '4d4cd160-50d5-4031-840c-4e1a67b3c5fc.jpg', '3333', 0, '2021-10-31 16:53:44'),
(11, 97, 16, 'Ming', 'ea3e6c31-905c-4f99-bd31-b2747d3865a3.jpg', '123456', 0, '2021-11-02 16:15:41'),
(12, 98, 13, 'John', '4d4cd160-50d5-4031-840c-4e1a67b3c5fc.jpg', '222', 0, '2021-11-03 16:37:41'),
(13, 99, 12, 'Ken', '703d8337-d22a-4875-8ecc-d9f48863b72b.jpg', '555', 0, '2021-11-03 20:48:07'),
(14, 100, 8, 'Jeffrey', '4c645599-a2c6-4f34-b60a-ca2834fa2b47.jpg', '11111', 0, '2021-11-03 20:48:44'),
(15, 101, 7, 'Michael', '4a1d6235-a3ff-49b3-83fd-5744f349b57b.jpg', '3222111222', 0, '2021-11-03 20:48:50'),
(16, 102, 5, 'Jeffrey', '2a5f7853-627f-47ce-8b7c-ac25b7e585df.jpg', '66666', 0, '2021-11-03 20:49:00'),
(17, 103, 1, 'Ai', '1b1087fd-49d5-4325-a1cc-eaa8cde02ca1.jpg', '2222', 0, '2021-11-03 20:49:12'),
(20, 0, 6, 'Amanda', NULL, '5858', 0, '2021-11-04 14:55:07');

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `sid` int(11) NOT NULL,
  `member_sid` varchar(255) NOT NULL,
  `product_sid` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `course`
--

CREATE TABLE `course` (
  `sid` int(11) NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `course_category` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `course_price` int(11) NOT NULL,
  `course_data` date NOT NULL,
  `duration` int(11) NOT NULL,
  `course_introduction` text NOT NULL,
  `easiness` varchar(255) NOT NULL,
  `course_status` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `course`
--

INSERT INTO `course` (`sid`, `teacher_sid`, `course_category`, `course_name`, `course_img`, `course_price`, `course_data`, `duration`, `course_introduction`, `easiness`, `course_status`, `created_at`) VALUES
(1, '1', '日文', 'Ai老師-日文課商務日語專家', '日文課程.jpg', 2755, '2021-06-08', 5, '練習日常對話 \r\n假設各種場景實際上是角色扮演\r\n了解日語的用法 示例）旅行，去餐館等時 \r\n日語發音練習（*對於初學者） \r\n與其他語言相比，日語在音調上沒有起伏， 人們很容易認為是一個容易發音的語言， 但外國人和日本人發音還是有很多不一樣的地方。\r\n 因此，我將教您更接近母語的發音', '3', 1, '0000-00-00 00:00:00'),
(2, '2', '日文', '初級實用日文會話專業酒店翻譯一對', '60a8c6f3f2600f81c5bf5fc9e73234be3550e5f2.png', 3210, '2021-06-01', 5, '日文會話課程\r\n-零經驗 ➡︎從五十音學起，平假名、片假名沒在怕。\r\n-初級階段➡︎學了一陣子日文，但仍然沒有信心開口？老師可以幫你重拾信心。\r\n上課配合時事文章，幫您增強字彙量UpUpUp\r\n日本語能力試驗N5~N3考試對策班。\r\n無論妳是針對哪一階段的日檢，老師都可以幫助分析錯題對症下藥，令你一次通過日檢沒難度！\r\n旅遊日文➡︎教你日常生活對話、30堂課輕鬆玩轉日本。', '1', 1, '0000-00-00 00:00:00'),
(3, '3', '日文', '中高級日語高手，商用旅遊生活會話!', '8fc83031291da1f1c510866d5d5969494dbe35ee.png', 3520, '2021-04-30', 5, ' 針對中高級同學，全程日語上課，能力全面提升\r\n 課程中加入大量日文會話，紮實學習，進步看得見\r\n 日檢JLPT強化特訓，重點強化或全面加強，滿足你的學習慾\r\n 會話課程提供商用會話、旅遊會話、時事主題會話、流行資訊會話，主題多元\r\n 客製化教學，課前課後免費提供PDF教材，方便預習、複習\r\n 課堂中使用Google Drive做紀錄，不怕課堂漏抄筆記', '3', 1, '0000-00-00 00:00:00'),
(4, '4', '英文', '換個英文腦，開口不用中翻英！       ', '1fe84cae1bf92d6b2c4c25dbc7683d5957a20137.png', 9790, '2021-03-25', 10, '【初級英語 A1 - A2】\r\n      -     實用會話\r\n      -     英文新聞\r\n      -     文法、句型分析\r\n      ✎    達成目標：簡單生活對話、組織基本句子\r\n\r\n【中級英語 B1 - B2】\r\n      -     英語影片訓練：影片結合逐字稿加強語感\r\n      -     多樣主題：討論、閱讀、口說、單字、聽力\r\n      -     閱讀練習：暢銷短文章、時事新聞、財經新聞\r\n      ✎   達成目標：理解Youtube、外語電影、深入英語對話\r\n\r\n【高級英語C1-C2】\r\n      -     Small Talk 如何和外國人聊天\r\n      -     Culture 美國文化，增進人際關係\r\n      -     Presentation 簡報建議、修改及訓練\r\n\r\n 【TOEIC多益準備：高效備考】 \r\n      -     完整的文法、閱讀、聽力、考題訓練\r\n      -     常考主題分析、拆解\r\n      -     課後練習專攻考試，扎實準備考試過關！', '1', 1, '0000-00-00 00:00:00'),
(5, '5', '英文', '企業英語會話', '006ca3fd529c386b350df75b79cd745c25b2d7ad.png', 7040, '2021-05-25', 100, '會說英文、中文\r\n\r\n TEFL 認證老師 專業ESL教師   教過數千名學生\r\n谷歌、蘋果、花旗銀行、中國信託、福克斯電視 +++ 的第一選擇教師\r\n北美洲英語  口語、聽力、發音和閱讀認證專業教師\r\n 數百個不同主題的精彩課程 中文流利\r\n\r\n\r\n 學習重要的美式英語詞彙和表達方式\r\n 課程側重於口語、聽力、閱讀和理解\r\n 我的課程是關於健康、食品、科技、環境和商業等等令人興奮的話題\r\n? 有趣的課程可幫助您建立信心並更好地理解英語 \r\n? 上我 10 節課，看著你的英語提高', '2', 1, '0000-00-00 00:00:00'),
(23, '1', '日文', 'Ai老師-日文五十音基礎班', '韓文課程(人際關係).jpg', 6000, '2021-08-11', 10, '你知道嗎？日文五十音其實不只有五十個音喔！\r\n\r\n日文基礎需要認識平假名、片假名，除了常聽到的兩種假名，還有濁音、半濁音、拗音、長音、促音等。', '1', 0, '0000-00-00 00:00:00'),
(24, '1', '日文', 'Ai老師-初階日文班', '韓文課程1.jpg', 7000, '2021-06-10', 10, '終於結束五十音的課程，現在開始我們要來活用所學囉！\r\n\r\n在初階日文班，我們將延伸五十音教授的簡單句型，進階練習自我介紹。\r\n\r\n以最簡單明瞭的方式教授形容詞、動詞變化，著重於學習形容詞用法、動詞分類用法、指示代名詞、數量、收與授等句型。\r\n\r\n活用文法，著重開口造句練習，加強日常生活和旅遊會話。\r\n\r\n學習句子與句子的連接方法，將各種詞類做有系統的整理，加強文法運用流暢度。', '1', 0, '0000-00-00 00:00:00'),
(25, '1', '日文', 'Ai老師-中階日文班', '韓文課程1.jpg', 7000, '2021-06-25', 10, '進入日文中級的階段，我們將開始學習各句型的連接方法，將各種詞類做有系統的整理，加強文法運用時的流暢度。\r\n\r\n為了可以在到日本時更流暢運用日語，課程中將更注重會話的活用，並期許學員能討論較深入的議題。\r\n\r\n老師將指導動詞的正確用法，包括自動詞、他動詞的分類與運用、並列動作、現在式的表現等。\r\n\r\n課程著重會話正確度，增加慣用語、詞彙，學習動詞名詞化、授受動詞、表示目的、被動詞等文法句型。\r\n培養短篇文章閱讀能力，並具備朗誦之能力。', '2', 0, '0000-00-00 00:00:00'),
(26, '1', '日文', 'Ai老師-日文會話班', '韓文課程1.jpg', 7000, '2021-06-29', 10, '您沒看錯！曾經有老師跟我們分享，不只一位學生都高分考過了日檢，但口說能力卻一蹋糊塗。\r\n\r\n幾位老師依照經驗討論分析後，發現應該是學生在學習語言時，不習慣將所學字彙或句型加以唸出，到最後反而會害怕開口。\r\n\r\n有時候不是您不會，而是缺了臨門一腳將您的會話開關打開。\r\n\r\n如果您也是害怕講日文、內心卻又對日文無比地喜愛，請跟著飛德的腳步一起打開您的 \"會話開關\"！\r\n\r\n在會話課中，我們還是會有單字、文法句型的補充，但會讓您多練習聽說技巧。讓老師們用有趣、活潑的方式一起練習日文會話。', '2', 0, '0000-00-00 00:00:00'),
(27, '1', '日文', 'Ai老師-進階日文班', '歐洲運動賽事.jpg', 8000, '2021-07-01', 10, '為更貼近日本當地使用的語言，課程將著重日文聽說讀寫的全方位訓練，幫助學習者進入進階程度。\r\n\r\n透過有系統組織的方法來提升聽說讀能力，培養中長篇文章閱讀能力、文法學習、延伸寫作的學習流程。。\r\n\r\n透過運用練習，熟悉功能性的表達方式，做為質問、徵求許可及邀請對方之用，並訓練整合題目作文能力。\r\n\r\n以強調突發狀況處理，加強表達能力為主，並訓練具備相近日本人語調及說話拍子、速度等能力。\r\n\r\n趕快跟著飛德一起更貼近 \"在地仔\" 日文吧！', '3', 0, '0000-00-00 00:00:00'),
(28, '1', '日文', 'Ai老師-商用日文班', '韓國文化.jpg', 8000, '2021-07-03', 10, '日本文化有其傳統與開放的地方', '2', 0, '0000-00-00 00:00:00'),
(29, '4', '英文', '初階英文會話', '59a40fa38d7105b9a371b1b234f97f32b989e6c0.png', 6000, '2021-06-10', 10, '我們絕對要鼓勵您，您的英文程度會比您想像中的還要高，只是您忘了曾學過或已經在腦中的語言該怎麼運用。\r\n初階英文學習是奠定使用英文的重要關鍵，我們提供英文免費檢測，根據學生的弱項分班，弱項被加強了，英文學習自然事半功倍。\r\n\r\n初階學習英文者要點：\r\n1. 勇敢走出對英文害怕的感覺！\r\n2. 經由老師引導，跟著課程慢慢吸收。\r\n3. 告訴自己不是不會，只是少了方法來有效學習。\r\n4. 讓飛德來幫助您，用有趣、愉快的學習法，來增進您對英文使用的信心。\r\n5. 帶著微笑來上課，帶著自信到各地開始使用英文吧！', '1', 0, '0000-00-00 00:00:00'),
(30, '4', '英文', 'Tracy老師-高中英文班', 'de5e47aa9faf074c45b26fd54d42e249c63c9d0a.png', 7000, '2021-06-16', 10, '英文學習不只為了考試，更要兼具實力。我們提供英文免費檢測，根據學生的程度和弱項分班，弱項被加強了，英文學習自然事半功倍。採用多媒體教學，取材多樣，學生在課堂中可學到新聞英文、美國影集、流行歌曲，自然而然英文實力大邁進！同時規劃全民英檢和多益證照考試，讓您申請大學輕而易舉!', '2', 0, '0000-00-00 00:00:00'),
(31, '4', '英文', 'Tracy老師-英文文法・字彙班', '37099665a755830a6d2fdc3efa2a95ec1194b0e3.png', 7000, '2021-06-25', 10, '文法字彙班\r\nyes 適合想從基礎學習文法和單字的你...\r\n\r\n    V  自編教材，教學淺顯易懂，從此不再怕文法\r\n\r\n    V  字根字首說文解字，單字好記好背\r\n\r\n    V  實際練習句型，英文實力大躍進', '2', 0, '0000-00-00 00:00:00'),
(32, '4', '英文', '掌握雅思・托福應考技巧', '492f6d9c790b103b523b4cc8e217beb954bb07df.png', 8000, '2021-06-29', 10, '每個人在英文學習上都有強弱項，若是能在個人的弱項上集中火力加強，才能獲得最大的成效。經由飛德專業的諮詢幫您找出英文學習的弱點，再針對弱項安排客製化的課表，對於雅思及托福分數的掌握會更得心應手。\r\n\r\n雅思及托福為綜合性考試，聽、說、讀、寫每個大題中，都需要具備其他能力方能作答。', '3', 0, '0000-00-00 00:00:00'),
(33, '4', '英文', '掌握多益口試訣竅', '969e127e06ba4cd81dc668d31e609bf7bda08831.png', 13000, '2021-08-11', 15, '每個人在英文學習上都有強弱項，若是能在個人的弱項上集中火力加強，才能獲得最大的成效。經由飛德專業的諮詢幫您找出英文學習的弱點，再針對弱項安排客製化的課表，對於多益分數的掌握會更得心應手。', '2', 0, '0000-00-00 00:00:00'),
(34, '4', '英文', '商業英語教學', '17f795125657a81b2a251943c5af76e7d05d3b0b.png', 9000, '2021-07-03', 10, '介紹實用且專業的職場英文，練習商業對話及聽力，學習閱讀報表及電子信函，加強國際商業重要時事。\r\n小班教學，針對弱項各個擊破，根據程度分級\r\n嚴格。實力加強搭配多益檢定證照，是您求職和\r\n升職的最佳利器', '3', 0, '0000-00-00 00:00:00'),
(36, '1', '日文', '與老外用日語交談', '法文課程(咖啡廳文化).jpg', 1500, '2021-08-04', 0, '與老外用日語交談', '', 0, '2021-08-23 10:32:22'),
(37, '1', '英文', '初級英語會話', '英文課程1.jpg', 2130, '2021-11-01', 0, '231', '', 0, '2021-11-01 11:20:59'),
(40, '1', '英文', '中級英語會話', '英文課程1.jpg', 2340, '2021-11-01', 0, '', '', 0, '2021-11-01 11:46:54'),
(42, '1', '日文', 'Ai老師生活日文課， 28 單元開啟自學之旅', '英文課程1.jpg', 2700, '2021-11-02', 0, '・會了解基礎的日文文法\r\n・會用簡單的日文句子溝通\r\n・認識自學日文的方式與技巧\r\n・了解五十音的學習技巧\r\n・學習日語文化的思維', '1', 0, '2021-11-02 19:32:57'),
(43, '1', '日文', 'Ai老師的用簡單的日文自助遊日本', '英文課程1.jpg', 2700, '2021-11-02', 0, '可以用日文點餐、購物，迷路時知道怎麼問路，不用依靠他人就可以自己上日本網站訂房。', '1', 0, '2021-11-02 19:37:01'),
(45, '1', '日文', 'Ai老師的成為專業筆譯必備：商務日文翻譯力', '7e98a0e7-e6f1-4911-a6da-b406e9a166ba.png', 2700, '2021-11-02', 0, '1. 認識商用日文筆譯，了解筆譯時的注意事項\r\n2. 學習穩定接案譯者的必備翻譯技巧\r\n3. 理解應如何完成專業的譯文\r\n4. 確認自己的能力，練習日語筆譯，累積翻譯經驗', '3', 0, '2021-11-02 19:39:32'),
(46, '1', '日文', 'Ai老師的圖解思維X時事引導：實用日文輕鬆玩！', '162cf8d5-0b84-476b-9a5a-fa6b77724470.png', 2700, '2021-11-02', 0, '① 圖解日文核心規則/特色：進入日文星球世界觀\r\n② 從日常對話反推真正需要的文法：建立日文文法基礎\r\n③ T字圖表：培養自行組織句型的能力\r\n④ 爆笑流行/生活時事為例句：另類學習體驗\r\n⑤ 看圖釐清日文難題：一知半解退散\r\n帶你一步步建立日文思考邏輯 、學習常用會話表達 ，挑戰開口說日文\r\n還有可愛插圖陪伴學習時光：）', '2', 0, '2021-11-02 19:40:52'),
(50, '4', '英文', 'Tracy老師-英文會話', 'ae346bb5-a6e0-42ce-b48f-f8fe55632b56.png', 2700, '2021-11-02', 0, 'V    情境式教學，創造開口說英文的活潑環境\r\nV   小班教學，每位同學都能和老師對話練習\r\nV   主題包含旅遊、美食、運動...等實用的生活會話，課程實用有趣', '2', 0, '2021-11-02 19:43:13'),
(52, '4', '英文', 'Tracy老師-個別家教', '5abf7065-9c30-4ee0-ae05-9ae5e0e502a4.png', 2700, '2021-11-02', 0, '個別家教提供專業教師為您量身訂做日語課程，內容、進度及上課時間\r\n\r\n均可彈性安排。', '1', 0, '2021-11-02 19:49:05'),
(53, '4', '英文', 'Tracy老師-快速養成《深入人心英文簡報術》', '558705ff-4d5b-4342-aa53-2eff814e833d.png', 5000, '2021-11-02', 0, '- 能夠有系統化的步驟，利用簡報的原理，大幅提升英文口語力\r\n- 能夠針對特定主題用英文作深入討論與報告\r\n- 能夠清楚知道吸引聽者注意力＋說服的關鍵，不只是平淡的英文敘述\r\n- 大幅提升對英文結構的了解，能運用在各種類型的演講、簡報', '2', 0, '2021-11-02 19:55:38'),
(54, '4', '英文', 'Tracy老師-職場英文大補帖｜上班族的跨國會議必修課', '7eaebeb7-c933-4180-a616-4fab4e6ffb06.png', 4998, '2021-11-02', 0, '- 認識如何正確使用會議英文，和客戶或同事進行英語 con-call\r\n- 認識 con-call 中的不同角色，以及如何協助會議有效進行\r\n- 認識如何用英語主持或領導會議，並能表達自身看法', '3', 0, '2021-11-02 19:57:20'),
(55, '4', '英文', 'Tracy老師-職場英文大補帖｜必勝簡報方程式', '9a2d43fd-6d31-42eb-bed3-593cf05f7a0b.png', 5000, '2021-11-02', 0, '- 能了解英文簡報的組成元素及架構，依照場合製作適用的簡報類型\r\n- 能分析聽眾屬性，依照聽眾需求設計出合適的簡報內容\r\n- 能善用常用英文金句組織簡報內容\r\n- 能運用說故事表達技巧、視覺輔助等工具替簡報加分', '2', 0, '2021-11-02 19:59:44'),
(56, '4', '英文', 'Tracy老師-職場英文大補帖｜從社交心法到溝通金句', '80b09d0d-9e99-4247-9e46-bcceb578323a.png', 3500, '2021-11-02', 0, '- 能了解基本社交禮儀、禁忌與東西方的文化差異\r\n- 在遇到社交窘境時，能以適當遣詞和語氣化解尷尬\r\n- 能分辨正式與口語的用法差異，並根據場合使用適當用詞\r\n- 能了解包容性語言和委婉用語的使用原則，並將其運用到日常社交場合\r\n- 能以非正式（口語化）的回應方式來表達自身看法', '1', 0, '2021-11-02 20:01:35'),
(57, '4', '英文', 'Tracy老師-雙語教育必學的核心素養－用英文學知識', 'd1e12a85-e4d0-489f-b22f-3c4f0388b849.png', 4500, '2021-11-02', 0, '● 英文、學科知識、核心素養能力一併提升\r\n● 提升靈活應用英語的能力\r\n● 提升獨立思考、批判性思考的能力\r\n● 提升對生活、時事與世界議題的興趣與了解\r\n● 若有計劃到國外念書，孩子能迅速跟上當地學業', '2', 0, '2021-11-02 20:02:53'),
(58, '1', '日文', 'Ai老師-商用日語：一次學好各種敬語及書信禮儀', '6c7d77b2-5e53-4b7a-b067-88609417ab70.png', 3000, '2021-11-02', 0, '你可以學到\r\n可以活用各種正式語言，再也不怕商業場合，去日本當店員或廣播使用敬語時也可以完全聽懂！', '2', 0, '2021-11-02 20:14:44');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `sid` int(11) NOT NULL,
  `identity` tinyint(1) NOT NULL,
  `verification` int(11) NOT NULL DEFAULT 0,
  `avatar` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth` date DEFAULT NULL,
  `gender` int(2) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `intro` longtext DEFAULT NULL,
  `created_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`sid`, `identity`, `verification`, `avatar`, `firstname`, `lastname`, `nickname`, `email`, `password`, `birth`, `gender`, `language`, `nationality`, `intro`, `created_date`) VALUES
(1, 1, 2, 'e2d7ea0d-8143-42ba-9ca8-611008acd894.jpg', 'Ai', 'lee', 'Ai', 't1@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '0000-00-00', 1, '英文、日文', '日本', 'Japan University Student\r\nFluent English speaker\r\n1000+ lesson completed\r\n4+ years teaching experience\r\nJapan university student\r\nLiving in Japan 4+ years\r\nTaught more than 100+ students\r\nAll materials provided\r\nLearn to speak in just 10 lessons \r\nConversational Japanese Grammar \r\nJLPT exams \r\nJapanese for kids', '2020-04-13'),
(2, 1, 2, '77ddfe2c-4da9-41a5-aa93-03eec586a3a3.jpg', '艾莉絲', '', '艾莉絲', 't2@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文、日文', '日本', 'Hey everyone  我是艾莉絲 \r\n有著外語教學背景的語言學碩士 \r\n研究領域包含：語音及實驗音韻學 專攻美式發音 \r\n課程包含： 子母音發音訓練  英文重音及語調  英語音韻規則  語音分析  影集式英語口說及聽力  成人英語  商業英語  基礎英文文法  英語升學考試  IELTS及TOEIC口說  客製化課程', '2020-04-13'),
(3, 1, 2, '12744a0a-c5ff-41a4-a3ac-d3953a91545e.jpg', 'Yumika', '', 'Yumika', 't3@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文、日文', '日本', 'Native Japaneseable to speak English and Chinese\r\n5years teaching experience\r\nMaster’s course of International education\r\nJapanese school teacher license\r\nExperienced Japanese volunteers \r\nKids Japanese \r\nBeginners \r\nJapanese character \r\nMinna no Nihongo\r\nListening, reading and pronunciation \r\nExam preparation', '2020-04-13'),
(4, 1, 2, '4df3a732-b28b-4153-b99e-cdcbf31da830.jpg', 'Tracy', '', 'Tracy', 't4@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文', '美國', 'ESL expert, TESOL certified, \r\n1000+ hours of teaching English to adults/teens/kids, all levels of fluency. \r\nInteresting, interactive & engaging classes. Give students the right environment to practice the language. \r\nDaily conversation \r\nEnglish for kids & teens \r\nBusiness English', '2020-04-13'),
(5, 1, 2, 'ea3e6c31-905c-4f99-bd31-b2747d3865a3.jpg', 'Jeffrey', '', 'Jeffrey', 't5@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 1, '英文', '美國', '6+ teaching experiences\r\nTESOL certificate \r\nChild expert \r\nVery Experienced Teacher! \r\nOver 16,000 classes taught! \r\nAges 5 - Adult Grammar Speaking Reading Writing Business Finance Marketing Sales \r\nBachelor of Business Marketing \r\nStudying for Chartered Professional Accountants', '2020-04-13'),
(6, 0, 0, NULL, '裴儀', '', 'Amanda', 'mebycute@yahoo.com.tw', '$2y$10$.oYcT2djWelQuNUzsdyKLehgNWg09A/Pt7iowdtbgwDp4KxN0De0y', '1998-03-12', 2, '', '', '', '2021-08-12'),
(7, 0, 0, NULL, '林以凡', '', 'Michael', 'mic@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1993-12-31', 1, '', '', '', '2021-08-12'),
(8, 0, 0, '703d8337-d22a-4875-8ecc-d9f48863b72b.jpg', '楊宗翰', '', 'Jeffrey', 'hanyang@yahoo.com.tw', '$2y$10$.xN3DJmZJ.Bl6z3IWmHRX.BRbwwU69.Qo20FYGEkFBKvd88JtqR4C', '1991-04-15', 1, '', '', '', '2021-08-12'),
(9, 0, 0, 'f84b3006-b697-4a6b-8bc7-de21521c750f.jpg', '余舒旻', '', 'yuki', 'littleyu@gmail.com', '$2y$10$NGO/9qhSCLzMaK.A1.zIoO1.SyHkw1yeLHfWkTmRkQjmGhbKmG/nS', '1997-05-12', 2, '', '', '', '2021-08-12'),
(10, 0, 0, 'eca70f10-1e90-4fa1-8d59-8406502a0dfd.jpg', '沈菀如', '', 'Ruby', 'rsheng@hotmail.com', '$2y$10$fYYlJLdna6D4Y6mG0leDX.aB9B9/E2rXlP95mI0ZQjVhiMHLbsR9y\n', '1995-03-04', 2, '', '', '', '2021-08-12'),
(11, 0, 0, '86be747d-42fc-41ed-a771-d80cf697cea1.jpg', '卓藝岑', '', 'Lisa', 'yicen1992@yahoo.com.tw', '$2y$10$lVTcfPCWj73e3Yayctkf5.Sq4MYfeLaf4gP712n6e8UpZmO8oHaHK', '1992-04-01', 2, '', '', '', '2021-08-12'),
(12, 0, 0, NULL, '林子勛', '', 'Ken', 'walker@gmail.com', '$2y$10$d8qooauoK8hI83od5MYk6.r.YPrYRJ5stVW/LCi7O9ptg1gnolK0e', '1996-01-01', 1, '', '', '', '2021-08-12'),
(13, 0, 0, NULL, '范兆廷', '', 'John', 'john@hotmail.com', '$2y$10$cCfeLN6TvktpbslwmSE5neGV93TREUW3oDwk13JWLI9iJbsOn7onm', '1992-09-09', 1, '', '', '', '2021-08-12'),
(15, 0, 0, NULL, '羅嘉玲', '', 'Emily', 'emilylo@yahoo.com.tw', '$2y$10$xImMJIFbeGue5gQSZEP8mejXPx0kMB.YXlbj4Xof7VMCp8JLiymDq', '1995-05-01', 2, '', '', '', '2021-08-15'),
(16, 0, 0, NULL, '王小明', '', 'Ming', 'ming@gmail.com', '$2y$10$uIg3cyWN7Igyhy0dIMplOOvymEEP/zQxU31MZyGvWi9hsePVDEaiy', '1995-01-01', 1, '', '', '', '2021-08-15'),
(18, 0, 0, NULL, '李安', '', 'An', 'anlee@gmail.com', '$2y$10$T4JEmTv.2rw7wlKnZMQ9HulJB0SWK7zo5fMz2PAkc0vP6rdHBwORe', '1954-10-23', 1, '', '', '', '2021-08-15'),
(19, 0, 0, 'e8157cd9-f0d1-4a98-adf8-f8d54cc2f95e.jpg', '李準基', '', '이준기', 'jg@gmail.com', '$2y$10$Mh5aUI331FtJoDsFLM4HhuQhouAuPKi8.nB8KHYdOjVySK0PPYBBy', '1982-04-17', 1, '', '', '', '2021-08-15'),
(20, 0, 0, NULL, '李知恩', '', 'IU', 'dlwlrma@gmail.com', '$2y$10$XgC4dKN50xKoAkEEEa0I3eKYh2AGJ17yjdRJaQCmZHspWJz5trVNO', '1993-05-16', 2, '', '', '', '2021-08-15'),
(21, 0, 0, '84a8195a-c78f-443a-83fc-9b60470a55dc.jpg', 'Archie James Beale', '', 'Mal', 'mal@gmail.com', '$2y$10$iraN5SqSaLimH0y.DUyd9OmmULanMotrLQjuxZJ3X7McFWeOw8XkK', '1997-11-22', 1, '', '', '', '2021-08-15'),
(22, 0, 0, '2a5f7853-627f-47ce-8b7c-ac25b7e585df.jpg', 'Danielle Galligan', '', 'Danielle', 'danielle@gmail.com', '$2y$10$t/eI1k3tJxJGyrWDtwA21eeZN6BvbsjibGToQ7LfnDihzMf0LNWYC', '1992-12-01', 2, '', '', '', '2021-08-15'),
(27, 0, 0, NULL, '徐晏逸', '', 'Sabrina', 'sasainter@hotmail.com', '$2y$10$t/eI1k3tJxJGyrWDtwA21eeZN6BvbsjibGToQ7LfnDihzMf0LNWYC', '1998-06-05', 2, '', '', '', '2021-08-16'),
(62, 1, 2, '3042a221-0aa4-437d-acea-8669b3e90908.jpg', 'Anna Ball', '', 'L50544', 'l5054@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 1, '英文、日文', '日本', 'One-on-One Class *8.0 IELTS and 7+ years teaching experience *full time teacher, more time slots available *2800+ classes conducted *1100+ 5 star reviews *provides class notes and materials after class Materials for Business English, Daily English Conversation, Travel English, Kids English, IELTS/TOEIC/TOEFL Speaking Practice.', '2020-04-13'),
(63, 1, 2, '4d4cd160-50d5-4031-840c-4e1a67b3c5fc.jpg', '魏嘉萱', '', 'wei', 'jiawei@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '2000-02-25', 2, '中文、英文、日文', '中國', '輔助超過50位學生取得金色多益證書 高效準備考試/面試/簡報 10年ESL教學經驗 理科腦/思路清晰/批判性思考訓練 發音矯正專家，美式口音 把英文壓力➡️自信來源 一對一客製化教學 漸進式對話練習，口說練習互動多，說的一嘴好英文不再只是口號', '2020-07-01'),
(64, 1, 2, '29a91a4f-1b58-4593-ac3f-b0be308e5c9c.jpg', '蔣正名', '', 'wright', 'wright@hotmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1998-04-08', 1, '中文、英文', '台灣', '🎖️六年教學經歷｜線上破千堂教學🎖️紐西蘭籍華僑｜母語人士正統美語發音🎖️多益金色證書｜專業正音教師🎖️兒童美語｜成人美語🎖️學員一致評價最有耐心、親和力教師｜帶領在無壓力的英語環境下進步🎖️鑽研兒童心理學，擅長與孩子建立朋友般的互動學習關係｜活潑熱情、耐心引導開口🎖️曾任兒童劇團英語戲劇營及知名新聞台英語主播營講師', '2020-10-14'),
(65, 1, 2, 'd3eda7d6-b6ce-45e7-a741-7582a15ec830.jpg', 'Miller Michelle', '', 'MM', 'mm03495@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1974-08-07', 1, '中文、英文', '加拿大', '在加拿大出生和長大，擁有 (2) 年的經驗 \r\n雅思和托福備考 - 通過考試！ \r\n商務英語 - 為您的職業生涯做好準備！ \r\n會話英語 - 提高你的技能！ \r\n口音和發音 - 減少你的口音！ [ \r\n課程期間的免費建議！', '2020-10-14'),
(66, 1, 2, '23950b43-a4bc-4704-805c-e6683db1e838.jpg', 'Jelly Willy', '', 'Will', 'jwilly@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1977-12-31', 1, '中文、英文', '澳洲', ' Teacher with ten years of IELTS and TOEFL teaching experience 🇬🇧 , Standard British accent 🇬🇧 Cambridge University 🇬🇧 TESOL certification 🇬🇧 10 years of experience  Self-study manual! Stress-free learning environment  Free workbooks  Composition correction', '2020-10-19'),
(67, 1, 2, '7adc6043cb34201875ab786456b2ec7372a423da.jpg', 'Thompson Klay Alexander', '', 'AK', 'thomak223@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1991-07-04', 1, '英文', '美國', '母语为英语的美国口音。 \r\n西班牙语母语者。 \r\n10+ 年经验。 \r\n英语作为第二语言文凭。 \r\n口语和写作教练。 \r\n第一次证书准备。 \r\n熟练度准备。 \r\n雅思备考。 \r\n托福备考。 \r\n儿童、青少年和成人课程。', '2020-10-20'),
(68, 1, 2, '76fd1f69-7c29-4d3b-b9f0-24344da3f323.jpg', 'Key Kaitlin', '', 'Kait', 'kait09372@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1988-12-03', 1, '英文', '英國', ' English Native Speaker with American accent. \r\nSpanish Native Speaker. \r\n10+ years experience. \r\nEnglish as a Second Language Diploma.\r\nSpeaking and writing coach. \r\nFirst Certificate Preparation. \r\nProficiency Preparation. \r\nIELTS Preparation. \r\nTOEFL Preparation. \r\nCourses for children, teenagers, and adults.', '2021-04-15'),
(69, 1, 2, '36b258e6-e055-4251-b423-5cd5378d8e68.jpg', 'Dominguez Rose Lilly', '', 'Lily', 'lily2431@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1999-01-01', 2, '英文、日文', '美國', ' Small Pronunciation GROUP classes 50% off\r\nNative Speaker🇬🇧\r\nI speak 4 languages\r\nPronunciation Expert\r\nAdults & Kids\r\nAll Levels Welcome\r\nFluent Conversation\r\nChildren’s English\r\nBusiness English\r\nPerfect Accent\r\nFun & Calm Lessons\r\nBoost Confidence\r\nBook a trial and let’s improve your English Fast', '2021-04-16'),
(70, 1, 0, NULL, '大川實禰', '', 'oka', 'oka0293@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1994-11-24', 2, '英文、日文', '日本', '', '2021-06-11'),
(71, 1, 0, NULL, '杉原岩雄', '', 'iwa', 'iwa8984@yahoo.com.jp', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1990-10-17', 1, '中文、日文', '日本', '', '2021-08-18'),
(1006, 0, 0, NULL, 'RRRRR', 'SSSSS', 'RS', 's1@ss.com', '$2a$10$AVephxPKk3dZ0LKIG4SbBOiOovXzulpa8cNhNI2epiTM05fBQBkoK', NULL, NULL, NULL, NULL, '', '2021-10-29'),
(1008, 1, 0, NULL, 'TTTTT', 'SSSSS', 'test01', 'tt@tt.com', '$2a$10$uASYlb0UAtfZMortDvIInO/lKTu/hLuTx5qtbaupsq.DE9dFLtXUW', NULL, NULL, NULL, NULL, '', '2021-10-29'),
(1010, 0, 0, NULL, 'samar', 'hsiao', 'samar666', 'sss@mail', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '2002-12-01', NULL, NULL, NULL, NULL, '2021-11-01'),
(1011, 0, 0, NULL, 'hsiao', 'yushin', '', 'samar@mail', '$2a$10$UhyLK4tVUfIamgF.iCrmv.2lnAWN5qJUzuWpSHmnNitcormQ8TN0q', NULL, NULL, NULL, NULL, NULL, '2021-11-03'),
(1012, 1, 0, NULL, 'rr', 'rr', '', 'rr@hh', '$2a$10$/65ii13Pa6we6Y4CnFhxQeGaLgRU9KS2qLj2.ZDmGfOq1MmtIPo1C', NULL, NULL, NULL, NULL, NULL, '2021-11-03'),
(1013, 0, 0, NULL, 'dd', 'dd', '', 'dd@mail', '$2a$10$SuZeD4CIbsPMZBxlwKFZX.eHYadVTSt/GK/R7MubqKE4HH8btvJ9C', NULL, NULL, NULL, NULL, NULL, '2021-11-04'),
(1014, 0, 0, '085dc4f3-059b-4ac4-9e1a-6a8d4eb8b571.jpg', 'samar', 'hsiao', 'samar', 'sss@gmail', '$2a$10$pGwxLf/846aJXGOLrNrWZuTIBOavsMEFukiwWqi1NXxkQhepGSDqW', '2002-10-01', NULL, NULL, NULL, NULL, '2021-11-05');

-- --------------------------------------------------------

--
-- 資料表結構 `order_detail`
--

CREATE TABLE `order_detail` (
  `sid` int(11) NOT NULL,
  `order_main_id` varchar(255) NOT NULL,
  `product_sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_detail`
--

INSERT INTO `order_detail` (`sid`, `order_main_id`, `product_sid`) VALUES
(103, 'BX217309', 1),
(104, 'BX217309', 3),
(105, 'MF650761', 4),
(106, 'MF650761', 5),
(107, 'MF650761', 25),
(108, 'MF650761', 24),
(109, 'MF650761', 26),
(110, 'MF650761', 37),
(111, 'MF650761', 40),
(112, 'PP458786', 24),
(113, 'PP458786', 25),
(114, 'PP458786', 26),
(115, 'FT259723', 2),
(116, 'FT259723', 1),
(117, 'PK869345', 5),
(118, 'PK869345', 4),
(119, 'YK565171', 2),
(120, 'YK565171', 4),
(121, 'YK565171', 3);

-- --------------------------------------------------------

--
-- 資料表結構 `order_main`
--

CREATE TABLE `order_main` (
  `sid` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `member_sid` int(11) NOT NULL,
  `pay_method` int(11) NOT NULL,
  `cstoresort` int(11) NOT NULL DEFAULT 0,
  `order_status` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_main`
--

INSERT INTO `order_main` (`sid`, `order_id`, `member_sid`, `pay_method`, `cstoresort`, `order_status`, `total_price`, `created_at`) VALUES
(50, 'BX217309', 1010, 2, 1, 0, 5648, '2021-11-02 00:09:30'),
(51, 'MF650761', 1010, 1, 0, 1, 15147, '2021-11-02 00:10:29'),
(52, 'PP458786', 1006, 2, 2, 0, 19950, '2021-11-02 15:43:34'),
(53, 'FT259723', 1006, 2, 3, 0, 5865, '2021-11-02 15:44:24'),
(54, 'PK869345', 1006, 3, 0, 2, 16830, '2021-11-02 15:46:01'),
(55, 'YK565171', 1006, 1, 0, 1, 14868, '2021-11-02 15:48:00');

-- --------------------------------------------------------

--
-- 資料表結構 `schedule`
--

CREATE TABLE `schedule` (
  `sid` int(11) NOT NULL,
  `member_sid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `start` datetime NOT NULL DEFAULT current_timestamp(),
  `end` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `sentence_game`
--

CREATE TABLE `sentence_game` (
  `sid` int(11) NOT NULL,
  `language` varchar(30) NOT NULL,
  `ques` varchar(1000) NOT NULL,
  `ans` varchar(1000) NOT NULL,
  `easiness` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `sentence_game`
--

INSERT INTO `sentence_game` (`sid`, `language`, `ques`, `ans`, `easiness`) VALUES
(1, 'English', '我喜歡和我的朋友一起去看電影', 'I like to watch movies with my friends', 2),
(2, 'English', '閱讀是我的興趣之一', 'Reading is one of my interest', 2),
(3, 'English', '放學後我會去圖書館', 'I will go to library after school', 1),
(4, 'English', '我的同學正在教室唱歌', 'My classmate is singing in classroom', 1),
(5, 'Japanese', '這就是我的忍道', 'これ が 私 の 忍道 です', 2),
(6, 'Japanese', '真相只有一個', '真実 は いつも ひとつ', 2),
(7, 'English', '每個人每天都需要喝水', 'Everyone needs to drink water everyday', 2),
(8, 'English', '你可以把門打開嗎', 'Can you open the door', 2),
(9, 'English', '他昨天晚上沒有回家', 'He didn\'t go home last night', 2);

-- --------------------------------------------------------

--
-- 資料表結構 `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `video_list`
--

CREATE TABLE `video_list` (
  `sid` int(11) NOT NULL,
  `course_sid` int(11) DEFAULT NULL,
  `video_cover` varchar(255) DEFAULT NULL,
  `video_name` varchar(255) NOT NULL,
  `video_link` longtext NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `created_at` date NOT NULL,
  `created_time` datetime NOT NULL DEFAULT current_timestamp(),
  `duration` int(11) NOT NULL,
  `view_count` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `video_list`
--

INSERT INTO `video_list` (`sid`, `course_sid`, `video_cover`, `video_name`, `video_link`, `teacher_sid`, `created_at`, `created_time`, `duration`, `view_count`) VALUES
(1, 0, '', '日語50音(平假名、片假名)', 'https://www.youtube.com/watch?v=GmRdUUVgSAA&list=PLuNucubP18snvU3Zz8FXF-kACs5EPK4XU&index=1', '64', '2020-01-05', '2020-01-05 07:30:24', 0, '15352'),
(2, 0, '', '日文發音的5個特徵', 'https://www.youtube.com/watch?v=4cKZha88Ito&list=PLuNucubP18snvU3Zz8FXF-kACs5EPK4XU&index=2', '64', '2020-01-05', '2020-01-05 07:31:30', 0, '14687'),
(3, 0, '', '日文基礎句型', 'https://www.youtube.com/watch?v=ixRB_rUxy20&list=PLuNucubP18snvU3Zz8FXF-kACs5EPK4XU&index=5', '64', '2020-01-05', '2020-01-05 07:31:33', 0, '24876'),
(4, 0, '', '商務日文-如何寫好一封日文商務郵件？', 'https://www.youtube.com/watch?v=x8KbXR_pnB8&t=1s', '69', '2020-01-08', '2020-01-08 07:31:36', 0, '8910'),
(5, 0, '', '商用日文-日文電話用語', 'https://www.youtube.com/watch?v=lHVxc8IPBbo', '69', '2020-01-08', '2020-01-08 10:37:30', 0, '8950'),
(6, 0, '', '生活實用英語-酒吧用語', 'https://www.youtube.com/watch?v=jEPXAr62pSc&list=PLG47EBGFEJNZaxS15HtldIeaPM4VcOWjd&index=3', '63', '2020-02-05', '2020-02-05 08:37:30', 0, '145201'),
(7, 0, '', '生活實用英語-機場', 'https://www.youtube.com/watch?v=vO5NZWdSvns&list=PLG47EBGFEJNZaxS15HtldIeaPM4VcOWjd&index=9', '63', '2020-02-05', '2020-02-05 16:37:30', 0, '154816'),
(8, 0, '', '生活實用英語-餐廳', 'https://www.youtube.com/watch?v=PTPxl5Jz5NM&list=PLG47EBGFEJNZaxS15HtldIeaPM4VcOWjd&index=21', '71', '2020-04-07', '2020-04-07 10:37:30', 0, '145786'),
(9, 0, '', '日語讀解#47：猫', 'https://youtu.be/YzFOwek-EIY', '71', '2020-04-07', '2020-04-07 16:37:30', 0, '15874'),
(10, 0, '', '方便的日語#01 なかったことに', 'https://www.youtube.com/watch?v=2j1x8xezUUE&list=PLzvvBBq1AJaHs7zfr0DHmYuinqYE37ZyX&index=1', '71', '2020-04-08', '2020-04-08 16:39:30', 0, '15287'),
(16, 0, '', '123', '31bca6eda796fc2b786b98e3b239f49cd37eff18.mp4', '62', '2021-08-16', '2021-08-16 04:16:04', 0, ''),
(22, 0, '', '大家一起學日文', '10b6ea98b37338f80222bcce46a3cb33fac33aa5.mp4', '62', '2021-08-16', '2021-08-16 07:37:30', 0, ''),
(24, 0, '', '123', 'a4fee23163d4507b8641a45851bfd2b24e1c8e13.mp4', '62', '2021-08-17', '2021-08-17 04:37:30', 0, ''),
(25, 0, '', '方便的日語#0001101 なかったことに122', '1937923428071a3f67685424b4ed0fcce6da1b09.mp4', '65', '2021-08-17', '2021-08-17 05:14:30', 0, ''),
(26, 0, '', 'hashitoritai', '912a2b04168b166c4eb8f4a0bf357361918f115b.mp4', '65', '2021-08-17', '2021-08-17 08:19:30', 0, ''),
(27, 0, '', '123', '17bd9c4f221d8106c0a7abc008259a0cb65b0ddd.mp4', '68', '2021-08-17', '2021-08-17 16:37:30', 0, ''),
(28, 0, '', '大型檔案測試', '807ddc66fe640783807abc58b2e4abb7918fdec3.mp4', '67', '2021-08-17', '2021-08-17 17:37:30', 0, ''),
(29, 0, '', '123', '2d5dfa6ed18f370bf154a12379fcdd7752b73eb0.mp4', '70', '2021-08-17', '2021-08-17 17:43:30', 0, ''),
(30, 0, '', '123', '21bc10822a6e0d1d07ed9bbc3cc398e837292b18.mp4', '70', '2021-08-18', '2021-08-18 06:37:30', 0, ''),
(31, 0, '', '123', '3d1e78ebb024d5c98b1f2f216d973fc7cd2cbc65.mp4', '65', '2021-08-18', '2021-08-18 07:23:30', 0, ''),
(32, 0, '', 'test', '4a98efaaff5a5de93226dd4614861dd7d7610328.mp4', '71', '2021-08-18', '2021-08-18 07:37:30', 0, ''),
(33, 0, '', 'test11:28', '4d5764a8032dc9a34523182226bf2e54bbed51c6.mp4', '69', '2021-08-18', '2021-08-18 09:37:30', 0, ''),
(34, 0, '', 'test1', 'c1ecc20a538d581ba7c8061bb40b4fa0dba013bd.mp4', '64', '2021-08-19', '2021-08-19 05:20:17', 0, ''),
(35, 0, '', 'test2', '811f8a2bfb7dc30a924af2bf793b91c404f7d98d.mp4', '63', '2021-08-19', '2021-08-19 06:20:30', 0, ''),
(36, 0, '', 'test3', '178da52ab7623a2b96f83990534aa7699cb98513.mp4', '62', '2021-08-19', '2021-08-19 08:07:25', 0, ''),
(37, 0, '', 'test4', '5ec84e5a6000d1f2dc594e00eb6637e42d560be2.mp4', '68', '2021-08-19', '2021-08-19 08:31:30', 0, ''),
(38, 0, '', 'test5', 'ed1909d05e085ae002a20b51dfa2f885881b2eb1.mp4', '71', '2021-08-19', '2021-08-19 10:37:30', 0, ''),
(39, 0, 'bc70e2e6d60675de69826e90619a51e1a9601c6d', 'test0819--01:04', '76982e2aa53d8ccfd4763f1d016c050f8961dc4c.mp4', '69', '2021-08-19', '2021-08-19 10:09:30', 0, ''),
(40, 0, 'c8dc5dcc36142690174f3c58e2eedac55cdd541a', 'test0819--01:08', '862a39fb69843feeb96f544bfb206797ad4289a0.mp4', '69', '2021-08-19', '2021-08-19 10:27:30', 0, ''),
(41, 0, 'd5c659f0427416cf68e59b31833db6a487a659fe', '1213', '58073ca224e1264c9467f1681ce7f9d17847dd72.mp4', '68', '2021-08-19', '2021-08-19 16:37:30', 0, ''),
(42, NULL, '35048b9106784368d257ff6a0042ac315afc1d8d.png', '這是一隻測試用影片', 'e020df8953f8887545659588eb793f71f3d7821a.mp4', '66', '2021-08-21', '2021-08-21 11:37:30', 0, ''),
(44, 36, '', '日語教學001', '70f40e997511d664e7b34d56f2525c1d1e568da4.mp4', '1', '2021-08-23', '2021-08-23 04:00:06', 233, ''),
(50, 36, 'c13138a409bcb5bb026749961ff09bf408c3d208.jpg', '日語教學002', 'e4cac3e2442c0c6f7142cec57134f4ab1d9bbaad.mp4', '1', '2021-08-23', '2021-08-23 04:05:30', 343, ''),
(51, 36, '9eff3bc2581445ffb0bf11ff876ff6154b905a9e.jpg', '日語教學003', 'dea3f5970683227a0911423dc2b4c2f2cd765231.mp4', '1', '2021-08-23', '2021-08-23 05:08:18', 234, ''),
(52, 36, 'c7398f397b730ee8778ccceaf36e919210f27f1a.jpg', '日語教學004?', 'c92bc209bbbc1dd6d49ff21591681867016dce0b.mp4', '1', '2021-08-23', '2021-08-23 06:12:11', 234, ''),
(53, 24, '0407b54681495a968916b16ae2d0b756735691b5.png', '常用的100句日文口語短句（初級篇）', 'cab94e203e360e93cc0b3552f165a89095bde22a.mp4', '1', '2021-08-23', '2021-08-23 06:37:30', 0, ''),
(54, 24, '12b24c1c08fc63d24f0f4b2ee398716a5ef62d27.png', '【早上3分鐘學會10句日語會話】', '626e40cb9186714f112059149f39b0358e381444.mp4', '1', '2021-08-23', '2021-08-23 06:39:30', 0, ''),
(55, 23, '4ce3e62c17cd890d6d87628d7f4a80307e7c65e9.jpg', '13456', 'aadf3d005ff61646ad5054e37f5cca94cf3df16a.mp4', '1', '2021-08-24', '2021-08-24 16:37:30', 0, '');

-- --------------------------------------------------------

--
-- 資料表結構 `viewcount`
--

CREATE TABLE `viewcount` (
  `sid` int(11) NOT NULL,
  `course_sid` int(11) NOT NULL,
  `Jan` int(11) NOT NULL,
  `Feb` int(11) NOT NULL,
  `Mar` int(11) NOT NULL,
  `Apr` int(11) NOT NULL,
  `May` int(11) NOT NULL,
  `Jun` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `viewcount`
--

INSERT INTO `viewcount` (`sid`, `course_sid`, `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`) VALUES
(1, 34, 731, 559, 279, 195, 221, 127),
(2, 18, 375, 290, 412, 437, 723, 536),
(3, 27, 23, 607, 128, 358, 246, 30),
(4, 16, 418, 511, 127, 43, 258, 587),
(5, 10, 7, 474, 183, 420, 347, 575),
(6, 23, 131, 111, 2, 157, 139, 65),
(7, 58, 6, 145, 68, 63, 112, 51),
(8, 2, 34, 157, 42, 59, 8, 26),
(9, 50, 119, 133, 149, 24, 153, 54),
(10, 46, 142, 6, 81, 71, 108, 11),
(11, 29, 120, 104, 159, 2, 13, 61),
(12, 45, 139, 72, 102, 133, 39, 118),
(13, 56, 130, 158, 79, 81, 10, 124),
(14, 57, 38, 8, 84, 77, 133, 112),
(15, 4, 102, 15, 88, 74, 107, 152),
(16, 24, 62, 74, 23, 52, 32, 5),
(17, 20, 83, 105, 118, 114, 55, 92),
(18, 3, 21, 55, 195, 142, 198, 149),
(19, 40, 118, 397, 363, 17, 78, 133),
(20, 15, 106, 369, 263, 139, 85, 13),
(21, 17, 302, 88, 555, 74, 29, 29),
(22, 33, 427, 439, 56, 109, 16, 94),
(23, 43, 60, 580, 284, 187, 184, 30),
(24, 52, 123, 173, 421, 257, 22, 100),
(25, 8, 219, 527, 47, 301, 107, 66),
(26, 11, 448, 42, 399, 45, 114, 80),
(27, 30, 407, 569, 179, 260, 70, 130),
(28, 37, 35, 32, 34, 51, 92, 148),
(29, 19, 453, 486, 199, 90, 27, 1),
(30, 54, 380, 12, 492, 15, 146, 85),
(31, 41, 222, 412, 61, 180, 189, 59),
(32, 36, 342, 36, 145, 12, 86, 9),
(33, 25, 383, 314, 190, 7, 27, 101),
(34, 55, 223, 399, 592, 375, 145, 130),
(35, 32, 451, 185, 500, 96, 140, 124),
(36, 31, 132, 386, 256, 79, 143, 156),
(37, 42, 421, 376, 365, 65, 198, 74),
(38, 14, 311, 348, 23, 179, 25, 46),
(39, 38, 447, 241, 195, 167, 23, 51),
(40, 28, 355, 306, 252, 230, 122, 52),
(41, 53, 470, 425, 434, 196, 56, 149),
(42, 47, 242, 424, 53, 128, 66, 111),
(43, 26, 123, 103, 70, 29, 3, 136),
(44, 35, 74, 247, 369, 337, 73, 47),
(45, 12, 159, 103, 542, 0, 58, 73),
(46, 51, 151, 274, 228, 212, 101, 150),
(47, 1, 242, 86, 158, 354, 128, 88),
(48, 9, 148, 77, 454, 160, 145, 70),
(49, 5, 384, 23, 531, 126, 183, 102),
(50, 13, 317, 414, 327, 264, 133, 54);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `article_inter`
--
ALTER TABLE `article_inter`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `article_pop`
--
ALTER TABLE `article_pop`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `art_messenger`
--
ALTER TABLE `art_messenger`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- 資料表索引 `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `order_main`
--
ALTER TABLE `order_main`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `member_sid` (`member_sid`);

--
-- 資料表索引 `sentence_game`
--
ALTER TABLE `sentence_game`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- 資料表索引 `video_list`
--
ALTER TABLE `video_list`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `viewcount`
--
ALTER TABLE `viewcount`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_inter`
--
ALTER TABLE `article_inter`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_pop`
--
ALTER TABLE `article_pop`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `art_messenger`
--
ALTER TABLE `art_messenger`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course`
--
ALTER TABLE `course`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1015;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_main`
--
ALTER TABLE `order_main`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
