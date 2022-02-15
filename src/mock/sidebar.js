//components
import Body from "../components/Body/Body";
import Explore from "../components/Explore";
import History from "../components/History";
import Library from "../components/Library";
import LikedVideos from "../components/LikedVideos";
import ShowMore from "../components/ShowMore";
import Subscription from "../components/Subscription";
import WatchLater from "../components/WatchLater";
import YourVideos from "../components/YourVideos";

// svg
import { ReactComponent as HomeSvg } from "../assets/icons/home.svg";
import { ReactComponent as ExploreSvg } from "../assets/icons/explore.svg";
import { ReactComponent as HistorySvg } from "../assets/icons/history.svg";
import { ReactComponent as LibrarySvg } from "../assets/icons/library.svg";
import { ReactComponent as SubscriptionSvg } from "../assets/icons/subscribers.svg";
import { ReactComponent as YourVideosSvg } from "../assets/icons/yourvideos.svg";
import { ReactComponent as WatchLaterSvg } from "../assets/icons/watchlater.svg";
import { ReactComponent as LikedVideosSvg } from "../assets/icons/liked.svg";
import { ReactComponent as ShowMoreSvg } from "../assets/icons/downarrow.svg";

export const sidebar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    svg: HomeSvg,
    component: Body,
    child: [],
    hidden: false,
  },

  {
    id: 2,
    title: "Explore",
    path: "/explore",
    svg: ExploreSvg,
    component: Explore,
    child: [],
    hidden: false,
  },
  {
    id: 3,
    title: "Subscription",
    path: "/subscription",
    svg: SubscriptionSvg,
    component: Subscription,
    child: [],
    hidden: false,
  },
  {
    id: 4,
    title: "Library",
    path: "/library",
    svg: LibrarySvg,
    component: Library,
    child: [],
    hidden: false,
  },
  {
    id: 5,
    title: "Hsitory",
    path: "/history",
    svg: HistorySvg,
    component: History,
    child: [],
    hidden: false,
  },
  {
    id: 6,
    title: "Your videos",
    path: "/home/:id",
    svg: YourVideosSvg,
    component: YourVideos,
    child: [],
    hidden: false,
  },
  {
    id: 7,
    title: "Watch later",
    path: "/watchlater",
    svg: WatchLaterSvg,
    component: WatchLater,
    child: [],
    hidden: false,
  },
  {
    id: 8,
    title: "Liked videos",
    path: "/likedvideos",
    svg: LikedVideosSvg,
    component: LikedVideos,
    child: [],
    hidden: false,
  },
  {
    id: 9,
    title: "Show more",
    path: "/showmore",
    svg: ShowMoreSvg,
    component: ShowMore,
    child: [],
    hidden: false,
  },
];
