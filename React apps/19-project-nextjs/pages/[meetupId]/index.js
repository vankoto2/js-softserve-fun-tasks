import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://digitalnomads.world/wp-content/uploads/2021/12/varna-digital-nomads.jpg.webp"
      title="A First Meetup"
      address="Varna"
      description="testing nextjs"
    />
  );
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://digitalnomads.world/wp-content/uploads/2021/12/varna-digital-nomads.jpg.webp",
        title: "A First Meetup",
        address: "Varna",
        description: "testing nextjs",
      },
    },
  };
};

export default MeetupDetails;
