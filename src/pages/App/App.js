import React, {useRef} from "react";
import './App.css';
import Header from "../../components/header";
import Main from "../main";
import EventTypes from "../EventTypes";
import EventList from "../EventList";
import DestinationList from "../DestinationList";
import JoinEventsLink from "../JoinEventsLink";
import {useTranslation} from "react-i18next";
import Footer from "../../components/footer";

function App() {

    const {i18n, t} = useTranslation();

    const PopularEvents = [
        {
            image: "https://s3-alpha-sig.figma.com/img/6bf2/b93c/e246f9e4f96250debfcb3da8657c934b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyXf8D9JcaoxC-QtpgndGPAs4kSpoJYQlVtMWJQfLC0jaeh47ovSLaiMNACJqfD36cB657ETft8gJxHnXb~OGhilCqBA5BjsvSZy4CIHR-clx1nZ7x-bGEzRILlVTy5y14raDkb-fJa2kFAW26dLYdVfVbwf0SAV~ka3Xiywej2412L24SKOsAL87EmAiDxSkVPGdUm5uUB-Vl-z5-~Sh2pQh2TRYM0fw5fXNQI99ju6eemGnBoTuDsbsPudNS6ETMQ-BEC4yn7-nOf1y~bJzcaGCarZR5rUElrlo-x6AYbHPGsa6tLLA6eNKqCaZQ7ae30rZCZYqy3~V98pXRR2vg__",
            eventName: t("event_art_and_wine"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "45"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/8c91/f775/375626d8e463e56428a750e2e92969ae?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iwZmoWVv0GiCRFPxBWCAUgy35AxdTFfEYSewjhvSAuLzrJUoOn1hS8-ynnO5vxhszCyJY9M9AlGZ5rTEudKmf~tJ6ODq2nwMNi7j0K1se4I99cGznsWvXtymuPaSNtSBvYw~nGKmqtimizIdTpBnOU6vlIDwpoTxUmq2zvht2bKMkboRq3qom-nP1aYilqEldc8mU~PRkjm7~ddhYQKAA5~~Z-7ZorjMNh2NR08t8kqruXKDkYuqodQKFUb95lJXzzANFBMVvDIBMSfIRjFx90ybT0S~cX-Aej-pBo24M1omfWKdhKpxABOWTXc0KpNIupocfIxHivvLIeir6sqxeA__",
            eventName: t("event_outdoor_yoga_session"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/22db/b162/b721b809e33c0c8260c8c2d7539dded1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsMI6NfxAeD40IRvCG2017NjfhPfYNEdlvjSLOzXt7DIpKWWuSunb9ZDuWR1yj5mSgUNlLot7roxqYqct3AHcJE~PCbM0oIiKkITg7OMlndkv5d2Y03pikAEHlYeT14ltQSmWn1a0ANkrGz36ickLfJqmRBI5wtuNGcFkKdhYbvmpxy2iMcXSWsmNbNPJxEdzKP8oNan~0RM~wzU9BUlFuwBvXP7a8HhM65TSHNn974ZdNPm9LO80AF~WGYQm~KKVW1Dl-h-mIL4-RW1VmeZ041pRQ~Ofbr8zzWbkMKMpR3eXs6ZPo4pVPq50OCqlG~i2LLMgCdAnbOPVvQyLA7sTA__",
            eventName: t("event_food_truck_festival"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/d4a6/465a/4224cc072cefe462d07670ca639d5225?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SCa10UiETPq~lDVW07fEGFTkE6fM--vaSi4VrUfZQoMMocOVPHJ3Vn~IZzyodYjrtiq83jK2q~jX31znVDVt3uvVaGMyrh-wR53CjBgcB3TIt9Om0CAiESN5AZMH32TEATrJK~rTIEyF0s6dOpNWf7TdvWU5F4y3JK0sPEss8zGG7kIr2Dxsjelz24ziXjaThOuqkFgzrUiKOw9Qmr6jA3JO0Wt1zBHp2unKVzbm0hsgUuIoEaToBjKo2wN4YhcbxwI2IvMtuKlOA60mKawE40XGGT5wb4I1xydaURrW16YGujvcEFBhkfY0sKKXK67PIIdqKGzMWDCVaR7cTzh~xw__",
            eventName: t("event_dream_fest"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/6bf2/b93c/e246f9e4f96250debfcb3da8657c934b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyXf8D9JcaoxC-QtpgndGPAs4kSpoJYQlVtMWJQfLC0jaeh47ovSLaiMNACJqfD36cB657ETft8gJxHnXb~OGhilCqBA5BjsvSZy4CIHR-clx1nZ7x-bGEzRILlVTy5y14raDkb-fJa2kFAW26dLYdVfVbwf0SAV~ka3Xiywej2412L24SKOsAL87EmAiDxSkVPGdUm5uUB-Vl-z5-~Sh2pQh2TRYM0fw5fXNQI99ju6eemGnBoTuDsbsPudNS6ETMQ-BEC4yn7-nOf1y~bJzcaGCarZR5rUElrlo-x6AYbHPGsa6tLLA6eNKqCaZQ7ae30rZCZYqy3~V98pXRR2vg__",
            eventName: t("event_art_and_wine"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "45"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/8c91/f775/375626d8e463e56428a750e2e92969ae?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iwZmoWVv0GiCRFPxBWCAUgy35AxdTFfEYSewjhvSAuLzrJUoOn1hS8-ynnO5vxhszCyJY9M9AlGZ5rTEudKmf~tJ6ODq2nwMNi7j0K1se4I99cGznsWvXtymuPaSNtSBvYw~nGKmqtimizIdTpBnOU6vlIDwpoTxUmq2zvht2bKMkboRq3qom-nP1aYilqEldc8mU~PRkjm7~ddhYQKAA5~~Z-7ZorjMNh2NR08t8kqruXKDkYuqodQKFUb95lJXzzANFBMVvDIBMSfIRjFx90ybT0S~cX-Aej-pBo24M1omfWKdhKpxABOWTXc0KpNIupocfIxHivvLIeir6sqxeA__",
            eventName: t("event_outdoor_yoga_session"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/22db/b162/b721b809e33c0c8260c8c2d7539dded1?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gsMI6NfxAeD40IRvCG2017NjfhPfYNEdlvjSLOzXt7DIpKWWuSunb9ZDuWR1yj5mSgUNlLot7roxqYqct3AHcJE~PCbM0oIiKkITg7OMlndkv5d2Y03pikAEHlYeT14ltQSmWn1a0ANkrGz36ickLfJqmRBI5wtuNGcFkKdhYbvmpxy2iMcXSWsmNbNPJxEdzKP8oNan~0RM~wzU9BUlFuwBvXP7a8HhM65TSHNn974ZdNPm9LO80AF~WGYQm~KKVW1Dl-h-mIL4-RW1VmeZ041pRQ~Ofbr8zzWbkMKMpR3eXs6ZPo4pVPq50OCqlG~i2LLMgCdAnbOPVvQyLA7sTA__",
            eventName: t("event_food_truck_festival"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/d4a6/465a/4224cc072cefe462d07670ca639d5225?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SCa10UiETPq~lDVW07fEGFTkE6fM--vaSi4VrUfZQoMMocOVPHJ3Vn~IZzyodYjrtiq83jK2q~jX31znVDVt3uvVaGMyrh-wR53CjBgcB3TIt9Om0CAiESN5AZMH32TEATrJK~rTIEyF0s6dOpNWf7TdvWU5F4y3JK0sPEss8zGG7kIr2Dxsjelz24ziXjaThOuqkFgzrUiKOw9Qmr6jA3JO0Wt1zBHp2unKVzbm0hsgUuIoEaToBjKo2wN4YhcbxwI2IvMtuKlOA60mKawE40XGGT5wb4I1xydaURrW16YGujvcEFBhkfY0sKKXK67PIIdqKGzMWDCVaR7cTzh~xw__",
            eventName: t("event_dream_fest"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        }

    ];

    const UpcomingEvents = [
        {
            image: "https://s3-alpha-sig.figma.com/img/aa80/4960/6bc891ce4bde7fa92b5828e1679b8831?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J02wWPPO1v6JxGmeZcjUsdPRtcStWIsdUrIVa-rHLcN3oEuVeckuwQ4zVkXaTg7594yRGhs9QqAqpL462pAWX4~uLacI9rJDI0h4c6-zvhrd-I4O8~0jwzS7QghY77CdLPbVMFBmLYIu8FgdnqOtsEHFdLFC1dtLrMJx5apaMohkgTvcGqpjRNuJUrw4bVs5aA46ZjdshExZVUs4AUbP4~LwirYObqdc~WhQBxVPpyaLal1wcVm~Xogdrkn64lfOh3bYPsLFVkAwo84w9loxiTPtKPBr7W0Hv8refeHNodhg6J3fvKMi3W6fwEPCN84vNDZuDxKpWfmOP--JvWGksQ__",
            eventName: t("event_outdoor_movie_night"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "45"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/d7e2/485a/9503108c5ee01cd641578fe4dff21423?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=po6Q6imqvrI1r8maq4Lel5KxKsnvsG8E5OmH9~xpApizXYc~PGkbt1apJPKgCwHr37wNQRYrIaT6xC~LSnjqI5lkiyZpYi51OR5uDecxsmjA-f8V~PDlMpBAR63KMnJBaNAdOI4alFLoHSGELgeNwG1DAeDY1vT~DI6BEXTYrs04nRhftBvzv7n9E05R2Qr1zHt~0MWPzu7sK3snN2F1jC8VFi0k3Xbxset3yUHtyD9nINGNQ4mY-IPUmZt0HQuil33kdfZPgfyPIKt~yrY1fWG9YH~lHk6kt26sf0i4qPtXBqmqFwvXChabGELABfz9muBCA5v9nYohQmTmZKx2nw__",
            eventName: t("event_tech_meetup"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/dd1a/152f/87303492eee348fa25a29b1f2819c10d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmX3ymhDhmps1S8zrxCqgBNEeCtUqAI0h4oekM-vFh0aJyiOytD3gD~nHRd39zdYnB3WONWg7uhNXMrLDX-WJceG8VzjTsnpwNg0s5DgLbKSb-axR--LH7EWu3EekPVcB0bQV8jXI5HqhPElmlmVSmaYPltS13WBVWLnf47bjpqhfJsqQudUVSbxj5DwabEEtgKOgYCZ3LhbQxiV0n6ro744kkO31SPTRb~ViRRiQ71T55SVS-4JfE3ROghf2pCTsnPJ0U~c1G0UmRsUifQX6c5EeLXYdjiRRzszgPnfWi4eP6WrlVA~h5-31Muy0m~MVpWirV-faGxSnvZxpnphng__",
            eventName: t("event_photography_workshop"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/ab2a/2b63/8cf86fa4c06b1082f9779183bebe3b25?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X2Hatnh9quXZCT53~b~XI~wjs~6Pn9BeMMtD1mWnp49X~nk8eCzaN5zdVvv~eUFbFhPRL7vjcX5QzHlY3EYF6RQyt0ik1KadRbikMtrEHQwhT3JLSkBxzckR5PcGbiOlLKAt8NM8tsPbkpXa89wmsWtZwWDiKQZN6J0Pk1OLaZ~cHsPotrCgQ0vXTORYUx36MQQY6W1HrENeLuj-VL9yX1X6VIhipZ9qz-76bDUucvXGg9W5whrb~ybKskDcxCZ7cMl5FcMBvBK-YMEM1Y4OB~dB03xW8SDG1ZiC4pdm3kmN7hfDOFVxhBgzaqfq-fVMnawcNvVqWgWjbj2A2YTjJA__",
            eventName: t("event_live_jazz_concert"),
            date: `${t("MON")}, ${t("JUL")} 21  • 4:00 PM`,
            peopleCount: "18",
            price: "15"
        },

    ]


    const destinations = [
        {
            image: "https://s3-alpha-sig.figma.com/img/2694/dd73/b47bd45bc666477c436a7f3d19f085c2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQf6En6RjyxS-c9xY9NblhNYwOkSL-5n3nakmuO10Lor-vVg6Q9PmUX561Jgkan3L0ZtXzsDIWJa8dFiKcmipsIwFx4xU3eGauTLhrDd-kyZGkTyxzCQf1d55bX5vbBa3HPkPqMa~1v4sIpP4snx8QCnQQ1aKvYVgNoIk0wIjA-1SIlSSxtQBXStzEMjT9bqGULNUbxia0M5uwWap48MjRKI9iPorG4Wd~jDOGCKm48ZYvAU6Z4XIIQvAVr34MR6Eg6i5jvm~OT1n5PbZbx00N~-1MXVoDPfl~u7BzFyG90Qrn9XUORYSg92uBsL~cuZBVcqCnSCQtR3MsY6yFQmjA__",
            name: 'Ibiza',
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/6233/a5c2/62ec346bdb7ed847a750fa9deaeb615c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c5cK3KGmn~TSvVBR6yIahYj9wet2gGWwVNlRduu0Dz17jOzE8DR9EyZ9DFapc5RTZwi1IL8Ubw~qhPSzmnkyNZWDToUVFhtm1lshol~6M1H2oxleBe2Y~-1RtiuRrGxnE~00EvZzhsOSWdncmBJVgz1XnalOzrouBbJzw8AJyQsE7RySMhDdKufJZ1-mfs~8P1E9GaEo9wdTOlt7AAP4amnYd0WGvZcZf9C4qdNSdAr6Lquv4hzOy6f~lPIDC~R9w8vmNyB~XKLGOYoq6ZkQYaBsBZDNGteQtGEK8B5fbmUl4uxnx6GgvSSrwcnAjP9KYBhrFYQyjymdECeKxrTnHA__",
            name: 'Paris',
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/b8c2/f5cc/69bdaf41e23773a2233e58eb187ddf32?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AoSjU6KHNBC8-Qz2TsmHwsNsR7xGzcfH5CUUFq3ytInXUIIpZIYliFe-x2PdgvPqp~Cyfudnvx0nXc79JHFFxRSu6JECufmcclZQ-7KxV3Yy-xWVialhlZA35uSkQ4wessqHUZmawWIejxd0yCNdDm4f~E64BJ4d8S46x6QOjqEP1XnNKg7IMlPbILRYkFLDM7tu9tLDv62-JtNZJYgsJ3OM2iiRmBZB4sZszosxySKQY7g1aZ7xL8nD7WUp5cSGNC0z6utudNoaHCR5TS7iEmCdhdssenNjJt8qV0AhAUASRDyJPMBj8T-mFHOjZsbZUAXU7ZUm1~AL1sCkP3ElLg__",
            name: 'Dubai',
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/54c1/d7cd/df626d80171d0b03eee07e52cb273388?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc8yO5k9TfOTHSYwU6Ww8u3OGKQx9KzW4njP5tKBZXtlyRibs49BGn5AnErJ46DxYy870FLmUoQbFF4VqOg5C1I-aArJZRZjrm0cLaO7S0x6s9zcdZnC7pFoBUcFrVVC~vGWpgifE-SqPSZ9XQKKDEL2vAxBUjrHlPl~lGni4td2K3rZhaqwqF1AMU7LvMK277CYsgiFvOmSJPwcAg-TKUHDs7MwvMqT~uoSSFdOPJS-TN24jELYA-Q~T-Ah89KSbaBxbJNPHFqlhTbOAwSmT1c14yZsRyMgq~8RB8hoCi5byOteHB8KvC9pa5Lo00znQeXb4riXfxgrXjtJgudPRw__",
            name: 'Portofino',
        },
    ];


    const eventsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="App">
            <Header scrollToSection={scrollToSection} refs={{ eventsRef, aboutRef, contactRef }}/>
            <Main/>
            <EventTypes/>
            <div ref={eventsRef} id="events">
                <EventList title={t("popularEvents")} events={PopularEvents}/>
                <EventList title={t("upcomingEvents")} events={UpcomingEvents}/>
            </div>

            <DestinationList title={t("topDestinations")} destinations={destinations}/>

            <div  ref={aboutRef} id="aboutUs">
                <div ref={contactRef} id={"contactUs"}>
            <JoinEventsLink mainText={t("joinEventsLink")} minorText={t("cardMinorText")}
                            buttonText={t("cardButton")} imageSrc={"joinEventsLink.png"}></JoinEventsLink>

                </div>
            <Footer></Footer>
            </div>
            </div>
    );
}

export default App;
