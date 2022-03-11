import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://digitalnomads.world/wp-content/uploads/2021/12/varna-digital-nomads.jpg.webp",
    address: "Varna",
    description: "First test",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://c7.alamy.com/comp/2B3NG62/aerial-view-by-drone-of-state-opera-house-varna-bulgaria-europe-2B3NG62.jpg",
    address: "Varna",
    description: "Second test",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups}>HomePage</MeetupList>;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
