import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "ABC News",
      title:
        "6 injured in shooting in downtown Chattanooga, Tennessee, police say - ABC News",
      description:
        "Multiple people were shot on Saturday night during an exchange of gunfire in downtown Chattanooga, Tennessee, police said.",
      url: "https://abcnews.go.com/US/multiple-people-shoot-tennessee-police/story?id=85048571",
      urlToImage:
        "https://s.abcnews.com/images/General/Breaking-News-banner-abc-ps-181024_hpMain_16x9_992.jpg",
      publishedAt: "2022-05-29T06:37:40Z",
      content:
        "At least six people were injured on Saturday night during an exchange of gunfire in downtown Chattanooga, Tennessee, police said.\r\nChattanooga Police officers were patrolling downtown at about 10:48 … [+856 chars]",
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Brianna Williams",
      title:
        "Gervonta Davis' TKO of Rolando Romero takes over social media - ESPN",
      description:
        "Davis' successful title defense caught the attention of several sports stars.",
      url: "https://www.espn.com/boxing/story/_/id/34002687/tank-bad-boy-tyrann-mathieu-kevin-durant-more-react-gervonta-davis-tko-rolando-romero",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0529%2Fr1018859_1296x729_16%2D9.jpg",
      publishedAt: "2022-05-29T05:53:08Z",
      content:
        'Gervonta "Tank" Davis and Rolando "Rolly" Romero entered the ring at Barclays Center in New York on Saturday with undefeated records and dozens of knockouts between the two of them.\r\nDavis, ESPN\'s th… [+2063 chars]',
    },
    {
      source: {
        id: null,
        name: "Heat.com",
      },
      author: "John Schuhmann",
      title: "4 things to watch for in Game 7 of Heat-Celtics series - NBA.com",
      description:
        "Superstar players, wild swings in momentum and nagging concerns all come under the withering glare of the Game 7 spotlight.",
      url: "https://www.nba.com/news/4-things-to-watch-for-in-game-7-of-heat-celtics-series",
      urlToImage:
        "https://cdn.nba.com/manage/2022/05/GettyImages-1240879324-1-scaled.jpg",
      publishedAt: "2022-05-29T04:45:05Z",
      content:
        "Will Boston continue its road dominance or can Miami live up to the pressure of defending home court?\r\n Complete coverage: Eastern Conference finals\r\nMIAMI  The Eastern Conference finals will be deci… [+8681 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Oma Seddiq",
      title:
        "Trump targets Liz Cheney at Wyoming rally days after high-profile endorsements flopped - Business Insider",
      description:
        "Cheney, a staunch conservative, has stood her ground against Trump and is running for reelection this year. He has endorsed Harriet Hageman, an attorney running for the House in the Wyoming Republican primary.",
      url: "https://www.businessinsider.com/trump-targets-liz-cheney-at-wyoming-rally-days-after-high-profile-endorsements-flopped-2022-5",
      urlToImage:
        "https://i.insider.com/6292f10fff955c0019c5e7b9?width=1200&format=jpeg",
      publishedAt: "2022-05-29T04:15:28Z",
      content:
        "CASPER, Wyoming Thousands of supporters of former President Donald Trump jumped out of their seats and held up their phones to capture the moment he took the stage on Saturday afternoon at a rally in… [+3175 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        'By <a href="/profiles/nectar-gan">Nectar Gan</a> and <a href="/profiles/andrew-raine">Andrew Raine</a>, CNN',
      title: "Russia's war in Ukraine: Live updates - CNN",
      description:
        "Intense Russian shelling is pounding the key city of Severodonetsk in embattled Luhansk as Moscow tries to consolidate its grip on eastern Ukraine. Follow live news updates here.",
      url: "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-29-22/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220527001111-01-ukraine-russia-soledar-super-tease.jpg",
      publishedAt: "2022-05-29T04:07:00Z",
      content:
        'Oleksandr Striuk, the head of the civil military administration in the embattled Ukrainian industrial city of Severodonetsk, said on Saturday that Ukrainian forces were in a "tough defensive position… [+2370 chars]',
    },
    {
      source: {
        id: null,
        name: "MLB.com",
      },
      author: "Manny Randhawa",
      title: "They scored how many? Pandemonium in Pac-12 game - MLB.com",
      description:
        "When we think of insane, back-and-forth, high-scoring games, the one that likely comes to mind first for many people is the Phillies’ epic 23-22, 10-inning victory over the Cubs on May 17, 1979. Mike Schmidt’s solo homer in the top of the 10th off fellow Hall…",
      url: "https://www.mlb.com/news/ucla-rallies-from-nine-runs-down-to-beat-oregon-state",
      urlToImage:
        "https://img.mlbstatic.com/mlb-images/image/private/t_2x1/t_w1536/mlb/pldiacosnbxdtpopy9sy.jpg",
      publishedAt: "2022-05-29T03:43:17Z",
      content:
        "When we think of insane, back-and-forth, high-scoring games, the one that likely comes to mind first for many people is the Phillies epic 23-22, 10-inning victory over the Cubs on May 17, 1979. Mike … [+2567 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "More than 3,500 flights canceled so far over Memorial Day weekend - CBS News",
      description:
        "More than 1,500 flights were canceled as of 9:50 p.m. EDT Saturday, according to flight tracking website FlightAware.",
      url: "https://www.cbsnews.com/news/memorial-day-weekend-travel-flight-cancellations/",
      urlToImage:
        "https://cbsnews2.cbsistatic.com/hub/i/r/2022/05/28/341e9ba4-dca8-42db-8cda-5dfc0adab77c/thumbnail/1200x630/ab0367d9d15b8051150f01ad33523e6c/memorial-day-weekend-flight-cancelations.jpg",
      publishedAt: "2022-05-29T03:06:00Z",
      content:
        "Airline travelers are not only facing sticker shock this Memorial Day weekend, the kickoff to the summer travel season. They're also dealing with a pileup of flight cancellations.\r\nMore than 1,500 fl… [+2317 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: null,
      title:
        "Brown holds Gov. Abbott accountable on mental health policies - CNN",
      description:
        "After the mass shooting at Robb Elementary School left 19 children and two adults dead, Gov. Abbott (R-TX) pinned the blame on mental health. CNN's Pamela Brown examines his record on providing mental health resources to Texans after multiple mass shootings o…",
      url: "https://www.cnn.com/videos/politics/2022/05/29/ftr-brown-abbott-mass-shootings-texas-mental-health-nr-vpx.cnn",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220527174734-greg-abbott-press-conference-05272022-super-tease.jpg",
      publishedAt: "2022-05-29T01:49:10Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "/FILM",
      },
      author: "Valerie Ettenhofer",
      title:
        "The Wild Bunch & American Graffiti Actor Bo Hopkins Has Passed Away At 80 - /Film",
      description:
        "Actor Bo Hopkins, best known for his roles in The Wild Bunch and American Graffiti, has died.",
      url: "https://www.slashfilm.com/878227/the-wild-bunch-american-graffiti-actor-bo-hopkins-has-passed-away-at-80/",
      urlToImage:
        "https://www.slashfilm.com/img/gallery/the-wild-bunch-american-graffiti-actor-bo-hopkins-has-passed-away-at-80/l-intro-1653786683.jpg",
      publishedAt: "2022-05-29T01:14:00Z",
      content:
        "Hopkins would work with Peckinpah again in 1972's \"The Getaway,\" and kept choosing interesting roles alongside talented filmmakers for the remainder of his career. In the '90s, he appeared in Oliver … [+1568 chars]",
    },
    {
      source: {
        id: null,
        name: "KPRC Click2Houston",
      },
      author: "Briana Zamora-Nipper",
      title:
        "Activist confronts Ted Cruz at Houston restaurant following his appearance at NRA convention - KPRC Click2Houston",
      description:
        "An activist confronted Sen. Ted Cruz (R-Tex.) at a Houston restaurant Friday night, following his speech at the National Rifle Association’s annual convention.",
      url: "https://www.click2houston.com/news/local/2022/05/29/activist-confronts-ted-cruz-at-houston-restaurant-following-his-appearance-at-nra-convention/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/05-29-2022/t_3009769fad4c428e9aa90e2822a8e7e8_name_image.jpg?_a=ATAK9d60",
      publishedAt: "2022-05-29T00:16:16Z",
      content:
        "An activist confronted Sen. Ted Cruz (R-Tex.) at a Houston restaurant Friday night, following his speech at the National Rifle Associations annual convention.\r\nA video shared on social media shows Cr… [+792 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Why scientists are also watching animal YouTube videos - BBC",
      description:
        "Those viral moments of unusual animal behaviour provide valuable insight for researchers as well.",
      url: "https://www.bbc.com/news/science-environment-61609679",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7E80/production/_124948323_mediaitem124948321.jpg",
      publishedAt: "2022-05-28T23:58:24Z",
      content:
        "By Victoria GillScience correspondent, BBC News\r\nImage source, Chester Zoo\r\nImage caption, Online videos are providing researchers with more evidence of elephants' intelligence\r\nWhat do Asian elephan… [+6501 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Tim Craig, Hannah Allam, Annie Gowen, Mark Berman",
      title:
        "Uvalde: 90 minutes of terror, a failed police response and shattered trust - The Washington Post",
      description:
        "Nineteen children and two teachers were killed in Uvalde, Tex., with another 17 people wounded, a devastating toll for a small, tightly woven Hispanic community where it was common for relatives to be in the same class at school. Local heartbreak bubbled into…",
      url: "https://www.washingtonpost.com/nation/2022/05/28/uvalde-classroom-police-911-failure/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LK7VS5W6DQI6ZPBVVEOQVFESHM.jpg&w=1440",
      publishedAt: "2022-05-28T23:47:00Z",
      content:
        "Placeholder while article actions load\r\nUVALDE, Tex. After slipping into Robb Elementary through an unlocked side entrance, 18-year-old Salvador Rolando Ramos stormed into adjoining classrooms and in… [+14123 chars]",
    },
    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "https://www.facebook.com/neurosciencenews",
      title:
        "In Long COVID, Blood Markers Are Linked to Neuropsychiatric Symptoms - Neuroscience News",
      description:
        "Researchers have identified elevated levels of a biomarker in the blood that persists for months in long COVID patients who experience neuropsychiatric symptoms.",
      url: "https://neurosciencenews.com/long-covid-psychology-20684/",
      urlToImage:
        "https://neurosciencenews.com/files/2022/05/long-covid-neuropsychology-neurosicences-public.jpg",
      publishedAt: "2022-05-28T22:34:59Z",
      content:
        "Summary: Researchers have identified elevated levels of a biomarker in the blood that persists for months in long COVID patients who experience neuropsychiatric symptoms.\r\nSource: UCSF\r\nIn a new stud… [+8205 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Eileen AJ Connelly",
      title:
        "SWAT happened? Did Uvalde tactical unit respond to Texas school shooting? - New York Post ",
      description:
        "Uvalde Police Department boasted online about having its own SWAT team two years before the massacre at Robb Elementary School that left 19 dead.",
      url: "https://nypost.com/2022/05/28/unclear-if-uvalde-swat-team-responded-to-texas-school-shooting/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/05/school-police-department-comp.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-05-28T21:58:00Z",
      content:
        "Two years before the massacre at Robb Elementary School that left 19 fourth-graders and their two teachers dead, the Uvalde Police Department boasted online about having its own SWAT team.\r\nThe depar… [+2650 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "https://www.engadget.com/about/editors/igor-bonifacic",
      title:
        "'Star Wars: Knights of the Old Republic II' heads to Nintendo Switch on June 8th - Engadget",
      description:
        "One of the best Star Wars games ever made is making its way to Switch..",
      url: "https://www.engadget.com/star-wars-knights-of-the-old-republic-2-nintendo-switch-june-8th-215051903.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-05/15aabbb0-decf-11ec-97eb-08e6487aa2c7",
      publishedAt: "2022-05-28T21:52:54Z",
      content:
        "One of the best Star Wars games ever made is making its way to Switch. Alongside the news that Respawn Entertainment will release Star Wars Jedi: Survivor\r\n in 2023, Disney shared yesterday that Aspy… [+1313 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Paradise Afshar, CNN",
      title:
        "Two people were killed and three are missing after a boating accident in coastal Georgia county - CNN",
      description:
        "Two people were killed and three others are missing after two boats collided Saturday morning on the Wilmington River, in Georgia's coastal Chatham County, officials said.",
      url: "https://www.cnn.com/2022/05/28/us/savannah-georgia-boating-accident-two-dead/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220528162835-01-savannah-georgia-boating-accident-screengrab-super-tease.jpeg",
      publishedAt: "2022-05-28T21:39:00Z",
      content:
        "(CNN)Two people were killed and three others are missing after two boats collided Saturday morning on the Wilmington River, in Georgia's coastal Chatham County, officials said.\r\nThe two boats were tr… [+1065 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Angela Barbuti",
      title:
        "'Top Gun: Maverick' starring Tom Cruise tops the domestic box office - New York Post ",
      description: "“Top Gun: Maverick” came out with guns blazing on Friday.",
      url: "https://nypost.com/2022/05/28/tom-cruises-top-gun-maverick-wins-domestic-box-office/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/05/newspress-collage-22451963-1653771872706.jpg?quality=75&strip=all&1653757564&w=1024",
      publishedAt: "2022-05-28T21:22:00Z",
      content:
        "Top Gun: Maverick came out with guns blazing at the domestic box office on Friday.\r\nThe sequel, starring Tom Cruise reprising his 1986 role as Captain Pete “Maverick” Mitchell alongside Miles Teller,… [+425 chars]",
    },
    {
      source: {
        id: null,
        name: "The Cincinnati Enquirer",
      },
      author: "Bobby Nightengale, The Enquirer",
      title:
        "Tommy Pham suspended after slapping Joc Pederson, text message - The Cincinnati Enquirer",
      description:
        "Tommy Pham was suspended three games for slapping Giants outfielder Joc Pederson during batting practice. It stemmed from a fantasy football league.",
      url: "https://www.cincinnati.com/story/sports/mlb/reds/2022/05/28/tommy-pham-suspended-after-slapping-joc-pederson-over-fantasy-football/9979223002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/04/24/PCIN/0ebcae16-ba64-4729-8356-4a95947380e2-042422RedsCardinals_18.jpg?auto=webp&crop=4381,2465,x0,y0&format=pjpg&width=1200",
      publishedAt: "2022-05-28T20:25:28Z",
      content:
        "Tommy Pham was suspended for three games, retroactive to Friday, after he slapped San Francisco Giants outfielder Joc Pederson during Friday’s batting practice.\r\n“I slapped Joc,” Pham said. “He did s… [+5170 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Jury starts deliberations in lawsuit between Johnny Depp and Amber Heard after 6 weeks of dramatic testimony - CBS News",
      description:
        'Depp is suing Heard for libel over a 2018 op-ed she wrote describing herself as "a public figure representing domestic abuse."',
      url: "https://www.cbsnews.com/live-updates/johnny-depp-amber-heard-lawsuit-jury-deliberations-start/",
      urlToImage:
        "https://cbsnews3.cbsistatic.com/hub/i/r/2022/05/03/ff45cfd5-25f3-4575-95d1-1721bc3c8ef9/thumbnail/1200x630/7fff536385977fba1cdc150de391df5f/ap22123652601185.jpg",
      publishedAt: "2022-05-28T20:12:00Z",
      content:
        "Jurors started their deliberations Friday in the civil libel trial between actors Johnny Depp and his ex-wife Amber Heard, following six weeks of courtroom drama that peeled back the curtain on the s… [+4680 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headliness</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
