import MeetupList from "../../components/meetups/MeetupList"


const DUMMY_MEETUPS = [
    {
        id : '1',
        title : 'First Meetup',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
        address:"Some address 5, 12345 Some City",
        description: "This is a first meetup."
    },  
    {
        id : '2',
        title : 'Second Meetup',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
        address:"Some address 10, 12345 Some City",
        description: "This is a second meetup."
    },
]

export default function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS} />
}