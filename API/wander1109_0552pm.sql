-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-11-09 10:50:52
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
(93, '1', '熱門影集', '燃燒自我的限時烏托邦', '01.png', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。', '2021-08-22', '300', 'https://www.youtube.com/embed/UiKcdWUpvrY', '2021-08-22 05:50:13'),
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
(96, '2', '異國節慶', '燃燒自我的限時烏托邦　', '11.jpg', '集合藝術、音樂與一切其他無法以言語形容奇事，每年出現在美國內華達州黑石沙漠一次，為期八天的「火燒人慶典」，在這裡參與者可以換上最怪的衣服，創造各式造型特異怪誕卻極有自我風格的裝置藝術，只要不做出傷天害理、妨害他人的事，你可以盡情在此活出自己，體驗自由的真諦。女兒節當天雖然不是日本國定假日，但家中的成員大都盡量聚在一起祝福女孩子健康平安的長大成人。父母會為女兒設置階梯狀的陳列台，由上至下，擺放穿著日式和服的娃娃，這種娃娃在日本稱為雛人形。為慶賀這個節日每個有女孩子的日本家庭都會擺放「女兒節人偶」，以祈求女兒幸福健康的成長。女兒節的做工講究、服飾華麗的人偶娃娃也成為日本人最喜愛的人偶之一，特別是富有家庭，會為女兒準備由名匠製作的漂亮人偶娃娃。', '2021-08-23', '474', 'https://www.youtube.com/embed/uFS9RZXu3YA', '2021-08-22 05:58:14'),
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
(9, 95, 19, '이준기', 'e8157cd9-f0d1-4a98-adf8-f8d54cc2f95e.jpg', '這部劇情，我超喜歡的!!', 0, '2021-10-31 16:53:37'),
(22, 98, 8, 'Jeffrey', '703d8337-d22a-4875-8ecc-d9f48863b72b.jpg', '我超喜歡這部的!!', 0, '2021-11-08 01:35:44'),
(23, 99, 9, 'yuki', 'f84b3006-b697-4a6b-8bc7-de21521c750f.jpg', '這部劇情，我超喜歡的!!', 0, '2021-11-08 01:36:53'),
(24, 103, 10, 'Ruby', 'eca70f10-1e90-4fa1-8d59-8406502a0dfd.jpg', '男主超帥的~~~', 0, '2021-11-08 01:41:51'),
(25, 102, 11, 'Lisa', '86be747d-42fc-41ed-a771-d80cf697cea1.jpg', '我超喜歡這部的女主的', 0, '2021-11-08 01:43:58'),
(26, 97, 19, '이준기', 'e8157cd9-f0d1-4a98-adf8-f8d54cc2f95e.jpg', '這部超級燒腦的~~~劇情超棒!!', 0, '2021-11-08 01:48:32'),
(27, 96, 21, 'Mal', '84a8195a-c78f-443a-83fc-9b60470a55dc.jpg', '我超喜歡這部的特效，做的超棒的~', 0, '2021-11-08 01:49:28'),
(28, 101, 22, 'Danielle', '2a5f7853-627f-47ce-8b7c-ac25b7e585df.jpg', '這部超推~~~~', 0, '2021-11-08 01:49:58'),
(29, 100, 1014, 'samar', '085dc4f3-059b-4ac4-9e1a-6a8d4eb8b571.jpg', '這部超有話題的，我超喜歡的~~', 0, '2021-11-08 01:51:13');

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

--
-- 傾印資料表的資料 `cart`
--

INSERT INTO `cart` (`sid`, `member_sid`, `product_sid`, `created_at`) VALUES
(28, '1016', '69', '2021-11-09 11:07:16'),
(29, '1016', '66', '2021-11-09 11:08:13'),
(30, '1016', '68', '2021-11-09 11:11:03'),
(31, '1006', '69', '2021-11-09 11:13:04');

-- --------------------------------------------------------

--
-- 資料表結構 `chat_conversation`
--

CREATE TABLE `chat_conversation` (
  `sid` int(11) NOT NULL,
  `senderID` int(11) NOT NULL,
  `receiverID` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `chat_conversation`
--

INSERT INTO `chat_conversation` (`sid`, `senderID`, `receiverID`, `created_at`) VALUES
(1, 1, 2, '2021-11-07 14:27:52'),
(2, 2, 3, '2021-11-07 14:33:54'),
(3, 2, 4, '2021-11-07 15:08:17');

-- --------------------------------------------------------

--
-- 資料表結構 `chat_message`
--

CREATE TABLE `chat_message` (
  `sid` int(11) NOT NULL,
  `conversationID` int(11) NOT NULL,
  `senderID` int(11) NOT NULL,
  `text` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `chat_message`
--

INSERT INTO `chat_message` (`sid`, `conversationID`, `senderID`, `text`, `created_at`) VALUES
(1, 2, 2, 'hello', '2021-11-07 15:53:35'),
(2, 3, 2, 'hello2', '2021-11-07 16:07:28'),
(88, 2, 2, 'fwefawfwa', '2021-11-08 14:35:07'),
(89, 2, 2, 'qewqweqweqw', '2021-11-08 14:35:13'),
(90, 2, 3, 'ffff', '2021-11-08 14:35:32');

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
(1, '1', '日文', '零基礎輕鬆成為日語達人', '零基礎輕鬆成為日語達人.jpg', 2755, '2021-06-08', 3510, '「以同學熟悉的主修課程文法概念」作為出發點向外延伸，將學過的日語基礎概念向外延伸，模擬旅遊實境，讓同學能以符合自身程度、自然且不失禮的日語，向日本人表達自己的需求，真正達到「學以致用」的效果。', '3', 1, '0000-00-00 00:00:00'),
(23, '1', '日文', 'N5情境會話課程', 'N5情境會話課程.jpg', 6000, '2021-08-11', 2756, '學習使用日文進行簡單自我介紹，能看懂日文固定詞句與簡單文體。學習課堂上或周遭等日常生活中常接觸之情境中，如為速度較慢之簡短對話，可從中聽取必要資訊。', '1', 0, '0000-00-00 00:00:00'),
(24, '1', '日文', '生活與文化日語', '生活與文化日語.jpg', 7000, '2021-06-10', 1389, '單堂獨立、無連貫性的主題課程，課中會帶領同學們一同認識日本道地的食、衣、住、行、育、樂等各項生活文化議題，除了可接觸到多元且趣味的課外詞彙之外，透過與老師及同班同學之間的意見交流，更可達到知識分享、經驗互惠的學習效果。', '1', 0, '0000-00-00 00:00:00'),
(25, '1', '英文', '旅遊英文一把罩', '旅遊英文一把罩.jpg', 7000, '2021-06-25', 2470, '出國迷路怎麼辦？景點介紹聽不懂？環遊世界的背包客就是你！', '2', 0, '0000-00-00 00:00:00'),
(26, '1', '英文', '會議協商與簡報技巧', '會議協商與簡報技巧.jpg', 7000, '2021-06-29', 3446, '根據職能英文培訓及實用性，模擬各項商務溝通與會議商業應用，讓您掌握商用英文技能與知識，打造無可取代的職場優勢！線上學，模擬會議與簡報訓練、商業提案、協商談判演練，全面提升職場應用商務英文能力，各項職場應用學習。', '2', 0, '0000-00-00 00:00:00'),
(27, '1', '英文', '求職英文', '求職英文.jpg', 8000, '2021-07-01', 3443, '根據職能英文培訓及實用性，模擬英文面試、英文履歷撰寫、外商公司求職情境演練，全面提升職場應用商務英文能力。', '3', 0, '0000-00-00 00:00:00'),
(37, '1', '英文', '生活英文實用課程', '生活英文實用課程.jpg', 2130, '2021-11-01', 3517, '日常生活的點滴、休閒或娛樂、購物和點餐，教你用英文過日子！', '', 0, '2021-11-01 11:20:59'),
(40, '1', '英文', '社交話題不斷電', '社交話題不斷電.jpg', 2340, '2021-11-01', 10537, '社交場合，擔心失禮嗎？害怕冷場嗎？幫你打造英文社交魂！', '', 0, '2021-11-01 11:46:54'),
(59, '1', '日文', '到日本人家作客', '到日本人家作客.jpg', 2340, '2021-11-01', 2233, '在日本留學期間，交個日本朋友以及去日本朋友家裡做客，是很普通也很常見的一件事。台日文化雖然十分相近，但文化習俗還是有差別的。本課程將讓你知道去日本朋友家裡做客一定要注意入鄉隨俗，避免做出失禮行為。\n\n', '', 0, '2021-11-01 11:46:54'),
(60, '1', '英文', '用簡單的日文自助遊日本', '用簡單的日文自助遊日本.jpg', 2340, '2021-11-01', 5845, '學習用日文點餐、購物，迷路時知道怎麼問路，不用倚靠祂人就可以自己上日本網站訂房。', '', 0, '2021-11-01 11:46:54'),
(61, '1', '英文', '跨國英語 con-call 實戰力', '跨國英語 con-call 實戰力.jpg', 2340, '2021-11-01', 2838, '了解會議流程，讓當聽眾的你更有效地了解會議內容，\n適當出聲，問專業的問題，也能讓主管看到你的能力！', '', 0, '2021-11-01 11:46:54'),
(62, '1', '英文', '帶老外遊台灣', '帶老外遊台灣.jpg', 2340, '2021-11-01', 3199, '外國朋友來台灣旅遊時，流暢用英文介紹豐富的台灣在地小吃及特色文化！', '', 0, '2021-11-01 11:46:54'),
(63, '1', '英文', '700+分數保證多益課程', '700+分數保證多益課程.jpg', 2340, '2021-11-01', 2950, '本課程透過聽力、閱讀模擬練習的過程中，將所學的單字、文法應用在生活中，透過說出來、寫下來的方式加深長期記憶，確實熟練單字用法，才能看懂、聽懂TOEIC考試整篇文章的意境，進而正確迅速地回答問題，並且有效養成英語實力。', '', 0, '2021-11-01 11:46:54'),
(65, '1', '英文', '提升英文口説流暢度', '提升英文口説流暢度.jpg', 2340, '2021-11-01', 3391, '本課程將讓你搞懂母音發展出來的 20 多種變化發音，遇到類似拼音的單字，也可以推測正確發音，以及辨別相似發音，不同意思的單字。還有類似拼法，但發音完全不一樣的單字。', '', 0, '2021-11-01 11:46:54'),
(66, '1', '英文', '英文情境會話開口說', '英文情境會話開口說.jpg', 2340, '2021-11-01', 3324, '你對自己的英語口說能力滿意嗎？是否常常只會那幾句，又害怕講錯被糾正而更不敢開口說？本課程將教你如何掌握使用單字及句型的準確度，輕輕鬆鬆開口說英語！', '', 0, '2021-11-01 11:46:54'),
(67, '1', '英文', '秒懂日本飲食文化', '秒懂日本飲食文化.jpg', 2340, '2021-11-01', 2738, '單堂獨立、無連貫性的主題課程，課中會帶領同學們一同認識日本道地的食、衣、住、行、育、樂等各項生活文化議題，除了可接觸到多元且趣味的課外詞彙之外，透過與老師及同班同學之間的意見交流，更可達到知識分享、經驗互惠的學習效果。', '', 0, '2021-11-01 11:46:54'),
(68, '1', '英文', '學美國道地的說話習慣', '學美國道地的說話習慣.jpg', 2340, '2021-11-01', 2735, '從英文和中文的口說發音習慣切入課程，提供你小技巧幫助你調整口說方式直到接近英文母語者。', '', 0, '2021-11-01 11:46:54'),
(69, '1', '英文', '用「英文邏輯」溝通說服你的主管、同事', '用「英文邏輯」溝通說服你的主管、同事.jpg', 2340, '2021-11-01', 0, '國際認證外師全英語面對面授課，著重職場英文的各種情境會話與商用寫作主題，讓你一次掌握必備技巧，在任何情境會話中都能自信開口說英文！', '', 0, '2021-11-01 11:46:54');

-- --------------------------------------------------------

--
-- 資料表結構 `cs_messenger`
--

CREATE TABLE `cs_messenger` (
  `sid` int(11) NOT NULL,
  `cs_sid` int(11) DEFAULT NULL,
  `st_sid` int(11) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `st_pictuer` varchar(255) DEFAULT NULL,
  `messenger` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL,
  `great` int(11) DEFAULT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `cs_messenger`
--

INSERT INTO `cs_messenger` (`sid`, `cs_sid`, `st_sid`, `nickname`, `st_pictuer`, `messenger`, `score`, `great`, `created_date`) VALUES
(8, 21, 102, 'Mal', '3042a221-0aa4-437d-acea-8669b3e90908.jpg', '課程內容優質、老師口條清晰。', '5', 0, '2021-10-30 19:17:22'),
(46, NULL, 8, 'Jeffrey', '703d8337-d22a-4875-8ecc-d9f48863b72b.jpg', '很容易吸收的課程，收穫滿滿。', '5', NULL, '2021-11-07 17:32:40'),
(47, NULL, 11, 'Lisa', '86be747d-42fc-41ed-a771-d80cf697cea1.jpg', '有邏輯、系統的一門課,相同的方法可以運用到其他語言的學習，真是獲益良多！！', '5', NULL, '2021-11-07 17:52:10'),
(49, NULL, 19, '이준기', 'e8157cd9-f0d1-4a98-adf8-f8d54cc2f95e.jpg', '課程架構清晰，讓我們清楚學習時的具體方向及架構。', '5', NULL, '2021-11-07 17:54:37'),
(50, NULL, 21, 'Mal', '84a8195a-c78f-443a-83fc-9b60470a55dc.jpg', '還不錯，容易記憶。', '4', NULL, '2021-11-07 17:56:58');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `sid` int(11) NOT NULL,
  `identity` tinyint(1) NOT NULL,
  `verification` int(11) NOT NULL DEFAULT 0,
  `resume` varchar(255) NOT NULL,
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

INSERT INTO `member` (`sid`, `identity`, `verification`, `resume`, `avatar`, `firstname`, `lastname`, `nickname`, `email`, `password`, `birth`, `gender`, `language`, `nationality`, `intro`, `created_date`) VALUES
(1, 1, 2, '', 'e2d7ea0d-8143-42ba-9ca8-611008acd894.jpg', 'Sayana', 'Kikaku ', 'Saya', 't1@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1997-06-10', 1, '英文、日文', '日本', 'Japan University Student\r\nFluent English speaker\r\n1000+ lesson completed\r\n4+ years teaching experience\r\nJapan university student\r\nLiving in Japan 4+ years\r\nTaught more than 100+ students\r\nAll materials provided\r\nLearn to speak in just 10 lessons \r\nConversational Japanese Grammar \r\nJLPT exams \r\nJapanese for kids', '2020-04-13'),
(2, 1, 2, '', '77ddfe2c-4da9-41a5-aa93-03eec586a3a3.jpg', 'Nayoun', 'Kang', 'Nayoun', 't2@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文、日文', '日本', 'Hey everyone  我是Nayoun \r\n有著外語教學背景的語言學碩士 \r\n研究領域包含：語音及實驗音韻學 專攻美式發音 \r\n課程包含： 子母音發音訓練  英文重音及語調  英語音韻規則  語音分析  影集式英語口說及聽力  成人英語  商業英語  基礎英文文法  英語升學考試  IELTS及TOEIC口說  客製化課程', '2020-04-13'),
(3, 1, 2, '', '12744a0a-c5ff-41a4-a3ac-d3953a91545e.jpg', 'Jurina', 'Saeki ', 'Jurina', 't3@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文、日文', '日本', 'Native Japaneseable to speak English and Chinese\r\n5years teaching experience\r\nMaster’s course of International education\r\nJapanese school teacher license\r\nExperienced Japanese volunteers \r\nKids Japanese \r\nBeginners \r\nJapanese character \r\nMinna no Nihongo\r\nListening, reading and pronunciation \r\nExam preparation', '2020-04-13'),
(4, 1, 2, '', 'f12ea339-8919-4ef2-8405-8ea4a506f8a7.jpg', 'Patrick', 'Graham', 'Graham', 't4@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 2, '英文', '美國', 'ESL expert, TESOL certified, \r\n1000+ hours of teaching English to adults/teens/kids, all levels of fluency. \r\nInteresting, interactive & engaging classes. Give students the right environment to practice the language. \r\nDaily conversation \r\nEnglish for kids & teens \r\nBusiness English', '2020-04-13'),
(5, 1, 2, '', '22c49315-d7c0-462f-b5ca-387d5f0fbd88.jpg', 'Miller', 'Michael', 'Michael', 't5@gg.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 1, '英文', '美國', '6+ teaching experiences\r\nTESOL certificate \r\nChild expert \r\nVery Experienced Teacher! \r\nOver 16,000 classes taught! \r\nAges 5 - Adult Grammar Speaking Reading Writing Business Finance Marketing Sales \r\nBachelor of Business Marketing \r\nStudying for Chartered Professional Accountants', '2020-04-13'),
(6, 0, 0, '', 'Anne Hathaway.jpg', 'Anne', 'Hathaway', 'Anne', 'mebycute@yahoo.com.tw', '$2y$10$.oYcT2djWelQuNUzsdyKLehgNWg09A/Pt7iowdtbgwDp4KxN0De0y', '1998-03-12', 2, '', '', '', '2021-08-12'),
(7, 0, 0, '', 'David Giles.jpeg', 'David', 'Giles', '', 'mic@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1993-12-31', 1, '', '', '', '2021-08-12'),
(8, 0, 0, '', 'Jane Campbell.jpeg', 'Jane ', 'Campbell', 'Jennie', 'hanyang@yahoo.com.tw', '$2y$10$.xN3DJmZJ.Bl6z3IWmHRX.BRbwwU69.Qo20FYGEkFBKvd88JtqR4C', '1991-04-15', 1, '', '', '', '2021-08-12'),
(9, 0, 0, '', 'Jax Paul德國人.jpeg', 'Jax', 'Paul', 'PP', 'littleyu@gmail.com', '$2y$10$NGO/9qhSCLzMaK.A1.zIoO1.SyHkw1yeLHfWkTmRkQjmGhbKmG/nS', '1997-05-12', 2, '', '', '', '2021-08-12'),
(10, 0, 0, '', 'Jocelyn Teller法國人.jpeg', 'Jocelyn ', 'Teller', '940', 'rsheng@hotmail.com', '$2y$10$fYYlJLdna6D4Y6mG0leDX.aB9B9/E2rXlP95mI0ZQjVhiMHLbsR9y\n', '1995-03-04', 2, '', '', '', '2021-08-12'),
(11, 0, 0, '', 'Kasanobu Wataru日本人.jpeg', 'Wataru', 'Kasanobu', 'water', 'yicen1992@yahoo.com.tw', '$2y$10$lVTcfPCWj73e3Yayctkf5.Sq4MYfeLaf4gP712n6e8UpZmO8oHaHK', '1992-04-01', 2, '', '', '', '2021-08-12'),
(12, 0, 0, '', 'Lizzie Hopper.jpeg', 'Lizzie', ' Hopper', 'Liz', 'walker@gmail.com', '$2y$10$d8qooauoK8hI83od5MYk6.r.YPrYRJ5stVW/LCi7O9ptg1gnolK0e', '1996-01-01', 1, '', '', '', '2021-08-12'),
(13, 0, 0, '', 'Penny Grecic.jpeg', 'Penny ', 'Grecic', 'penny', 'john@hotmail.com', '$2y$10$cCfeLN6TvktpbslwmSE5neGV93TREUW3oDwk13JWLI9iJbsOn7onm', '1992-09-09', 1, '', '', '', '2021-08-12'),
(15, 0, 0, '', 'Sagehashi Harue.jpeg', 'Sagehashi ', 'Harue', 'Emily', 'emilylo@yahoo.com.tw', '$2y$10$xImMJIFbeGue5gQSZEP8mejXPx0kMB.YXlbj4Xof7VMCp8JLiymDq', '1995-05-01', 2, '', '', '', '2021-08-15'),
(16, 0, 0, '', 'Tatsuoka  Natsumi(姓加名).jpeg', 'Tatsuoka  Natsumi', '', 'Ming', 'ming@gmail.com', '$2y$10$uIg3cyWN7Igyhy0dIMplOOvymEEP/zQxU31MZyGvWi9hsePVDEaiy', '1995-01-01', 1, '', '', '', '2021-08-15'),
(62, 1, 3, '', '039a55cd-a471-4a7f-9233-385313456fec.jpg', 'Tarin', 'Johnson', 'L50544', 'l5054@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1982-05-24', 1, '英文、日文', '日本', 'One-on-One Class *8.0 IELTS and 7+ years teaching experience *full time teacher, more time slots available *2800+ classes conducted *1100+ 5 star reviews *provides class notes and materials after class Materials for Business English, Daily English Conversation, Travel English, Kids English, IELTS/TOEIC/TOEFL Speaking Practice.', '2020-04-13'),
(63, 1, 2, '', '414c42f4-20a6-4f3b-9d30-dce3b36835e0.jpg', '嘉萱', '魏', 'wei', 'jiawei@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '2000-02-25', 2, '中文、英文、日文', '中國', '輔助超過50位學生取得金色多益證書 高效準備考試/面試/簡報 10年ESL教學經驗 理科腦/思路清晰/批判性思考訓練 發音矯正專家，美式口音 把英文壓力➡️自信來源 一對一客製化教學 漸進式對話練習，口說練習互動多，說的一嘴好英文不再只是口號', '2020-07-01'),
(64, 1, 2, '', '29a91a4f-1b58-4593-ac3f-b0be308e5c9c.jpg', '正名', '蔣', 'wright', 'wright@hotmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1998-04-08', 1, '中文、英文', '台灣', '🎖️六年教學經歷｜線上破千堂教學🎖️紐西蘭籍華僑｜母語人士正統美語發音🎖️多益金色證書｜專業正音教師🎖️兒童美語｜成人美語🎖️學員一致評價最有耐心、親和力教師｜帶領在無壓力的英語環境下進步🎖️鑽研兒童心理學，擅長與孩子建立朋友般的互動學習關係｜活潑熱情、耐心引導開口🎖️曾任兒童劇團英語戲劇營及知名新聞台英語主播營講師', '2020-10-14'),
(65, 1, 2, '', '35b3a759-f8ec-4ea9-8f48-9e93dff4e997.jpg', 'Michelle', 'Miller ', 'MM', 'mm03495@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1974-08-07', 1, '中文、英文', '加拿大', '在加拿大出生和長大，擁有 (2) 年的經驗 \r\n雅思和托福備考 - 通過考試！ \r\n商務英語 - 為您的職業生涯做好準備！ \r\n會話英語 - 提高你的技能！ \r\n口音和發音 - 減少你的口音！ [ \r\n課程期間的免費建議！', '2020-10-14'),
(66, 1, 2, '', '3bf5f9fe-562f-409c-bf3a-2c79a8ede563.jpg', 'Jackson', 'Willy', 'Will', 'jwilly@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1977-12-31', 1, '中文、英文', '澳洲', 'Teacher with ten years of IELTS and TOEFL teaching experience, Standard British accent 🇬🇧 Cambridge University 🇬🇧 TESOL certification 🇬🇧 10 years of experience  Self-study manual! Stress-free learning environment  Free workbooks  Composition correction', '2020-10-19'),
(67, 1, 2, '', '7adc6043cb34201875ab786456b2ec7372a423da.jpg', 'Thompson', 'Alexander', 'AK', 'thomak223@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1991-07-04', 1, '英文', '美國', '母语为英语的美国口音。 \r\n西班牙语母语者。 \r\n10+ 年经验。 \r\n英语作为第二语言文凭。 \r\n口语和写作教练。 \r\n第一次证书准备。 \r\n熟练度准备。 \r\n雅思备考。 \r\n托福备考。 \r\n儿童、青少年和成人课程。', '2020-10-20'),
(68, 1, 2, '', 'e651caf3-38d9-4e2d-83f1-f99236f0647a.jpg', 'Key', 'Kaitlin', 'Kait', 'kait09372@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1988-12-03', 1, '英文', '英國', ' English Native Speaker with American accent. \r\nSpanish Native Speaker. \r\n10+ years experience. \r\nEnglish as a Second Language Diploma.\r\nSpeaking and writing coach. \r\nFirst Certificate Preparation. \r\nProficiency Preparation. \r\nIELTS Preparation. \r\nTOEFL Preparation. \r\nCourses for children, teenagers, and adults.', '2021-04-15'),
(69, 1, 2, '', '68318c8c-f8ab-481f-a6ba-42d28ee66aad.jpg', 'Catherine', 'Dorléac', 'Lily', 'lily2431@gmail.com', '$2y$10$ceKZw1EX1TdwadauBEet9u.Xe4gqzMFmpYACO8oG.cZCgbqYMHwzG', '1999-01-01', 2, '英文、日文', '美國', ' Small Pronunciation GROUP classes 50% off\r\nNative Speaker🇬🇧\r\nI speak 4 languages\r\nPronunciation Expert\r\nAdults & Kids\r\nAll Levels Welcome\r\nFluent Conversation\r\nChildren’s English\r\nBusiness English\r\nPerfect Accent\r\nFun & Calm Lessons\r\nBoost Confidence\r\nBook a trial and let’s improve your English Fast', '2021-04-16'),
(1008, 1, 0, '', NULL, 'TTTTT', 'SSSSS', 'test01', 'tt@tt.com', '$2a$10$uASYlb0UAtfZMortDvIInO/lKTu/hLuTx5qtbaupsq.DE9dFLtXUW', NULL, NULL, NULL, NULL, '', '2021-10-29'),
(1012, 1, 0, '', NULL, 'rr', 'rr', '', 'rr@hh', '$2a$10$/65ii13Pa6we6Y4CnFhxQeGaLgRU9KS2qLj2.ZDmGfOq1MmtIPo1C', NULL, NULL, NULL, NULL, NULL, '2021-11-03');

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
(122, 'JO407383', 67),
(123, 'JO407383', 65);

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
(56, 'JO407383', 1016, 2, 1, 1, 4580, '2021-11-08 14:16:42');

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

--
-- 傾印資料表的資料 `schedule`
--

INSERT INTO `schedule` (`sid`, `member_sid`, `title`, `start`, `end`) VALUES
(1, 1016, '提升英文口説流暢度', '2021-11-08 00:00:00', '2021-11-12 00:00:00'),
(3, 1016, '秒懂日本飲食文化', '2021-11-14 00:00:00', '2021-11-19 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `sentence_game`
--

CREATE TABLE `sentence_game` (
  `sid` int(11) NOT NULL,
  `language` varchar(30) NOT NULL,
  `ques` varchar(999) NOT NULL,
  `ans` varchar(999) NOT NULL,
  `easiness` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `sentence_game`
--

INSERT INTO `sentence_game` (`sid`, `language`, `ques`, `ans`, `easiness`) VALUES
(1, 'en-US', '我喜歡和我的朋友一起去看電影', 'I like to watch movies with my friends', 2),
(2, 'en-US', '閱讀是我的興趣之一', 'Reading is one of my interest', 2),
(3, 'en-US', '放學後我會去圖書館', 'I will go to library after school', 2),
(4, 'en-US', '我的同學正在教室唱歌', 'My classmate is singing in classroom', 2),
(5, 'en-US', '每個人每天都需要喝水', 'Everyone needs to drink water everyday', 2),
(6, 'en-US', '你可以把門打開嗎', 'Can you open the door', 1),
(7, 'en-US', '他昨天晚上沒有回家', 'He didn\'t go home last night', 1),
(8, 'en-US', 'Alice每天都會去學校', 'Alice goes to school everyday', 1),
(9, 'en-US', 'Jack是我最好的朋友', 'Jack is my best friend', 1),
(10, 'en-US', '請把電燈打開', 'Please turn on the light', 1),
(11, 'ja-JP', '我是台灣人', '私 は 台湾人 です', 1),
(12, 'ja-JP', '我吃蘋果', 'りんご を 食べます', 1),
(13, 'ja-JP', '那棟建築很有名', 'あの たてもの は ゆうめい です', 1),
(14, 'ja-JP', '昨天去看了電影', '昨日 は 映画 を 見に 行きました', 1),
(15, 'ja-JP', '現在是幾點', '今 は 何時 ですか', 1),
(16, 'ja-JP', '你是台灣人嗎', 'あなた は 台湾人 ですか', 2),
(17, 'ja-JP', '對 我是台灣人', 'はい 台湾人 です', 2),
(18, 'ja-JP', '你晚餐吃什麼', '晩ご飯 は 何 を 食べ ました か', 2),
(19, 'ja-JP', '我吃了炒飯', 'チャーハン を 食べました', 2),
(20, 'ja-JP', '喜歡什麼水果', 'フルーツ は 何 が 好き ですか', 2),
(21, 'ja-JP', '我喜歡鳳梨', '私 は パイナップル が 好きです', 2),
(22, 'ja-JP', '你現在想要什麼', 'あなた は 今 なに が 欲しい ですか', 2),
(23, 'ja-JP', '我想要新的手機', '新しい 携帯 が 欲しい です', 2),
(24, 'ja-JP', '今天也努力工作', '今日 も お仕事 頑張ります', 2),
(25, 'ja-JP', '你的工作是什麼', 'あなた の お仕事 は なん ですか', 2),
(26, 'ja-JP', '你有去過日本嗎', 'あなた は 日本 に 行った こと が ありますか', 3),
(27, 'ja-JP', '哥哥想吃甜的食物', 'お兄さん は 甘い もの を 食べ たがり ます', 3),
(28, 'ja-JP', '那個人每天看小說', 'あの人 は 毎日 小説 を 読んで います', 3),
(29, 'ja-JP', '朋友回美國去了', '友達 は アメリカ へ 帰って いきました', 3),
(30, 'ja-JP', '身體突然變得不舒服', '急に 体調 が 悪く なって きました', 3),
(31, 'ja-JP', '明天早點去醫院比較好', '明日 は 早く 病院 に いった ほう が いいです', 3),
(32, 'ja-JP', '老師讓學生接受測驗', '先生 は 学生 に 試験 を 受け させました', 3),
(33, 'ja-JP', '我被老師罵了', '私 は 先生 に 叱ら れました', 3),
(34, 'ja-JP', '我一邊聽音樂一邊念書', '私 は 音楽 を 聞き ながら 勉強 を しました', 3),
(35, 'ja-JP', '可以借個筆嗎', 'ペン を お借り できませんか', 3),
(36, 'ja-JP', '為了健康所以上健身房', '健康 の ために ジム に 通って います', 3),
(37, 'ja-JP', '每年六月都會舉行畢業典禮', '毎年 六月 に 卒業式 が 行われます', 3),
(38, 'ja-JP', '我被觀光客問路', '私 は 観光客 に 道 を 聞かれ ました', 3),
(39, 'ja-JP', '我請朋友借我書', '私 は 友達 に 本 を 貸して もらい ました', 3),
(40, 'ja-JP', '什麼日本料理我都吃', '私 は 日本料理 は 何 でも 食べれ ます', 3);

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
  `video_name` varchar(255) NOT NULL,
  `video_link` longtext NOT NULL,
  `teacher_sid` varchar(255) NOT NULL,
  `created_at` date NOT NULL,
  `created_time` datetime NOT NULL DEFAULT current_timestamp(),
  `duration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `video_list`
--

INSERT INTO `video_list` (`sid`, `course_sid`, `video_name`, `video_link`, `teacher_sid`, `created_at`, `created_time`, `duration`) VALUES
(1, 1, 'N5旅遊日語-身份篇', 'N5旅遊日語-身份篇.mp4', '1', '2020-01-05', '2020-01-05 07:30:24', 743),
(2, 1, 'N5旅遊日語-機場篇', '', '1', '2020-01-05', '2020-01-05 07:31:30', 834),
(3, 1, 'N5旅遊日語-飛機・飯店篇', ' ', '1', '2020-01-05', '2020-01-05 07:31:33', 753),
(4, 1, 'N5旅遊日語-飲食・購物篇', ' ', '1', '2020-01-08', '2020-01-08 07:31:36', 724),
(5, 1, 'N5旅遊日語-諮詢・交通篇', ' ', '1', '2020-01-08', '2020-01-08 10:37:30', 456),
(6, 23, '1.自我介紹', ' 自我介紹.mp4', '1', '2020-02-05', '2020-02-05 08:37:30', 456),
(7, 23, '2.星期、時間、月日的說法', ' ', '1', '2020-02-05', '2020-02-05 16:37:30', 783),
(8, 23, '3.使用助詞的動詞文型、形容詞文型', ' ', '1', '2020-04-07', '2020-04-07 10:37:30', 643),
(16, 23, '4.學習助詞，表示\"原因\"，應用於解釋事發原因', ' ', '1', '2021-08-16', '2021-08-16 04:16:04', 341),
(22, 23, '5.學習講述形容經驗、推測事情、講述事物的變化、將來的夢想', ' ', '1', '2021-08-16', '2021-08-16 07:37:30', 533),
(23, 23, '6.情境會話演練', ' ', '1', '2021-08-16', '0000-00-00 00:00:00', 0),
(24, 24, '1.日本人的姓氏', '日本人的姓氏.mp4', '1', '2021-08-17', '2021-08-17 04:37:30', 345),
(44, 24, '2.日本人的縣民特性', ' ', '1', '2021-08-23', '2021-08-23 04:00:06', 233),
(50, 24, '3.在日本的世界遺產', ' ', '1', '2021-08-23', '2021-08-23 04:05:30', 343),
(51, 24, '4.日本人的社群網路 ', ' ', '1', '2021-08-23', '2021-08-23 05:08:18', 234),
(52, 24, '5.刺青與溫泉', ' ', '1', '2021-08-23', '2021-08-23 06:12:11', 234),
(53, 25, '1.問路篇', ' 問路篇.mp4', '1', '2021-08-23', '2021-08-23 06:37:30', 234),
(54, 25, '2.旅遊機場報到篇', ' ', '1', '2021-08-23', '2021-08-23 06:39:30', 564),
(55, 25, '3.旅遊輕鬆趣', ' ', '1', '2021-08-24', '2021-08-24 16:37:30', 345),
(56, 25, '4.背包客', ' ', '1', '2021-08-24', '0000-00-00 00:00:00', 363),
(57, 25, '5.華麗遊輪行', ' ', '1', '2021-08-24', '0000-00-00 00:00:00', 733),
(58, 25, '6.探索倫敦之美', ' ', '1', '2021-08-24', '0000-00-00 00:00:00', 231),
(59, 26, '1.開始會議', ' 開始會議.mp4', '1', '2021-08-31', '0000-00-00 00:00:00', 434),
(60, 26, '2.腦力激盪', ' ', '1', '2021-08-31', '0000-00-00 00:00:00', 564),
(61, 26, '3.考慮提案', ' ', '1', '2021-08-31', '0000-00-00 00:00:00', 823),
(62, 26, '4.處理會議中的衝突', ' ', '1', '2021-08-31', '0000-00-00 00:00:00', 652),
(63, 26, '5.下決定', ' ', '1', '2021-08-31', '0000-00-00 00:00:00', 341),
(64, 26, '6.結束會議', ' ', '1', '2021-08-31', '0000-00-00 00:00:00', 632),
(65, 27, '1.基本履歷寫作技巧', '基本履歷寫作技巧.mp4', '1', '2021-09-02', '0000-00-00 00:00:00', 234),
(66, 27, '2.基本求職信寫作技巧', '', '1', '2021-09-02', '0000-00-00 00:00:00', 653),
(67, 27, '3.創造良好第一印象', '', '1', '2021-09-02', '0000-00-00 00:00:00', 842),
(68, 27, '4.回答面試問題', '', '1', '2021-09-02', '0000-00-00 00:00:00', 341),
(69, 27, '5.描述自己', '', '1', '2021-09-02', '0000-00-00 00:00:00', 832),
(70, 27, '6.寫面試後感謝信', '', '1', '2021-09-02', '0000-00-00 00:00:00', 541),
(72, 37, '1.餐廳Easy點', ' 餐廳Easy點.mp4', '1', '2021-09-08', '0000-00-00 00:00:00', 546),
(73, 37, '2.聰明購物小撇步', ' ', '1', '2021-09-08', '0000-00-00 00:00:00', 642),
(74, 37, '3.文化酒吧瘋', ' ', '1', '2021-09-08', '0000-00-00 00:00:00', 563),
(75, 37, '4.尬衝浪瘋美語', ' ', '1', '2021-09-08', '0000-00-00 00:00:00', 642),
(76, 37, '5.餐桌禮儀', ' ', '1', '2021-09-08', '0000-00-00 00:00:00', 361),
(77, 37, '6.銀行英語一把罩', ' ', '1', '2021-09-08', '0000-00-00 00:00:00', 763),
(78, 40, '1.初次見面相見歡', ' 初次見面相見歡.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 321),
(79, 40, '2.送禮的禁忌', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 7634),
(80, 40, '3.情緒表達', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 431),
(81, 40, '4.挑對禮物不尷尬', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 845),
(82, 40, '5.從星座看個性', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 633),
(83, 40, '6.俚語大考驗', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 673),
(84, 59, '1.容易搞錯的日語', '容易搞錯的日語.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 521),
(85, 59, '2.拜訪日本人家中應注意的規矩與禮儀', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 214),
(86, 59, '3.到日本朋友家作客的禮貌用語', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 712),
(87, 59, '4.送禮不可不知的細節', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 632),
(88, 59, '5.飯後聊天話題', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 154),
(89, 60, '1.常用日文單詞與句型', '常用日文單詞與句型.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 715),
(90, 60, '2.旅遊與吃：不同料理的點餐知識', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 821),
(91, 60, '3.旅遊與吃：用餐禮儀與注意事項', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 1074),
(92, 60, '4.旅遊與吃：從點餐到用餐', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 1425),
(93, 60, '5.旅遊與吃：結帳與客滿的情況', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 1100),
(94, 60, '6.旅遊與住：線上訂房教學', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 710),
(95, 61, '1.con-call技巧', ' 10 Tips for Better Video Conference Calls.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 492),
(96, 61, '2.Small talk重要性', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 673),
(97, 61, '3.如何開啟話題', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 441),
(98, 61, '4.Small talk禁忌', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 521),
(99, 61, '5.從Small talk到正題', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 711),
(100, 62, '1.平溪天燈節', 'Setting Off Paper Sky Lanterns in Pingxi, Taiwan.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 226),
(101, 62, '2.在大雪山森林公園', '', '1', '2021-09-10', '0000-00-00 00:00:00', 758),
(102, 62, '3.看歌仔戲', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 634),
(103, 62, '4.台南小吃', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 715),
(104, 62, '5.拜訪手工藝品創作坊', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 671),
(105, 63, '1.認識職場常見基本詞彙及同義詞', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 364),
(106, 63, '2.熟習外國口音', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 673),
(107, 63, '3.解構常見題型', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 751),
(108, 63, '4.實戰聽力測試', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 521),
(109, 63, '5.分析答題弱點', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 641),
(110, 65, '1. 發音與口音到底是什麼', 'Learn English Business Language in 2 Hours_006.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 702),
(111, 65, '2.母音決定音節，子音決定發音的清晰度', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 841),
(112, 65, '3.原來拼音也會影響到發音', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 812),
(113, 65, '4. 單字、句子的重音怎麼放', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 475),
(114, 65, '5.來測試看看你的發音是否標準吧！', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 561),
(115, 66, '1. 第一次見面如何開場不尷尬', '美語家教.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 921),
(116, 66, '2.開學與新同學分組報告', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 627),
(117, 66, '3.週末約朋友到酒吧看球賽', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 610),
(118, 66, '4.搭計程車與司機尬聊', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 683),
(119, 66, '5.和朋友規劃一場週末小旅行', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 483),
(120, 67, '1.去一趟日本傳統市場採買吧！', 'c1ecc20a538d581ba7c8061bb40b4fa0dba013bd.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 208),
(121, 67, '2.築地市場', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 384),
(122, 67, '3.日本人喜歡的蛋糕', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 547),
(123, 67, '4.每個日本家庭主婦都會的拿手菜', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 742),
(124, 67, '5.飲食文化介紹(日本酒)', ' ', '1', '2021-09-10', '0000-00-00 00:00:00', 857),
(125, 68, '1.學習前的小秘訣', 'Learn English Business Language in 2 Hours_001.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 207),
(126, 68, '2.重新建立基礎', 'Learn English Business Language in 2 Hours_002.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 537),
(127, 68, '3.道地美式發音', 'Learn English Business Language in 2 Hours_003.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 782),
(128, 68, '4.子音字母結尾', 'Learn English Business Language in 2 Hours_004.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 621),
(129, 68, '5.用英文思考', 'Learn English Business Language in 2 Hours_005.mp4', '1', '2021-09-10', '0000-00-00 00:00:00', 588);

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
(2, 67, 375, 290, 412, 437, 723, 536),
(3, 27, 23, 607, 128, 358, 246, 30),
(4, 65, 418, 511, 127, 43, 258, 587),
(5, 40, 7, 474, 183, 420, 347, 575),
(6, 23, 131, 111, 2, 157, 139, 65),
(7, 58, 6, 145, 68, 63, 112, 51),
(8, 23, 34, 157, 42, 59, 8, 26),
(9, 50, 119, 133, 149, 24, 153, 54),
(10, 46, 142, 6, 81, 71, 108, 11),
(11, 29, 120, 104, 159, 2, 13, 61),
(12, 45, 139, 72, 102, 133, 39, 118),
(13, 56, 130, 158, 79, 81, 10, 124),
(14, 57, 38, 8, 84, 77, 133, 112),
(15, 25, 102, 15, 88, 74, 107, 152),
(16, 24, 62, 74, 23, 52, 32, 5),
(17, 69, 83, 105, 118, 114, 55, 92),
(18, 24, 21, 55, 195, 142, 198, 149),
(19, 40, 118, 397, 363, 17, 78, 133),
(20, 63, 106, 369, 263, 139, 85, 13),
(21, 66, 302, 88, 555, 74, 29, 29),
(22, 33, 427, 439, 56, 109, 16, 94),
(23, 43, 60, 580, 284, 187, 184, 30),
(24, 52, 123, 173, 421, 257, 22, 100),
(25, 27, 219, 527, 47, 301, 107, 66),
(26, 59, 448, 42, 399, 45, 114, 80),
(27, 30, 407, 569, 179, 260, 70, 130),
(28, 37, 35, 32, 34, 51, 92, 148),
(29, 68, 453, 486, 199, 90, 27, 1),
(30, 54, 380, 12, 492, 15, 146, 85),
(31, 41, 222, 412, 61, 180, 189, 59),
(32, 36, 342, 36, 145, 12, 86, 9),
(33, 25, 383, 314, 190, 7, 27, 101),
(34, 55, 223, 399, 592, 375, 145, 130),
(35, 32, 451, 185, 500, 96, 140, 124),
(36, 31, 132, 386, 256, 79, 143, 156),
(37, 42, 421, 376, 365, 65, 198, 74),
(38, 62, 311, 348, 23, 179, 25, 46),
(39, 38, 447, 241, 195, 167, 23, 51),
(40, 28, 355, 306, 252, 230, 122, 52),
(41, 53, 470, 425, 434, 196, 56, 149),
(42, 47, 242, 424, 53, 128, 66, 111),
(43, 26, 123, 103, 70, 29, 3, 136),
(44, 35, 74, 247, 369, 337, 73, 47),
(45, 60, 159, 103, 542, 0, 58, 73),
(46, 51, 151, 274, 228, 212, 101, 150),
(47, 1, 242, 86, 158, 354, 128, 88),
(48, 37, 148, 77, 454, 160, 145, 70),
(49, 26, 384, 23, 531, 126, 183, 102),
(50, 61, 317, 414, 327, 264, 133, 54);

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
-- 資料表索引 `chat_conversation`
--
ALTER TABLE `chat_conversation`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `chat_message`
--
ALTER TABLE `chat_message`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`sid`);

--
-- 資料表索引 `cs_messenger`
--
ALTER TABLE `cs_messenger`
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
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat_conversation`
--
ALTER TABLE `chat_conversation`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `chat_message`
--
ALTER TABLE `chat_message`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course`
--
ALTER TABLE `course`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cs_messenger`
--
ALTER TABLE `cs_messenger`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1018;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_main`
--
ALTER TABLE `order_main`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `schedule`
--
ALTER TABLE `schedule`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sentence_game`
--
ALTER TABLE `sentence_game`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `video_list`
--
ALTER TABLE `video_list`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
