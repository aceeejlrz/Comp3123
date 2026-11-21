
import Student from "@/app/student";
import College from "./college";
import Counter from "./counter";
import CounterClassComponent from "./counterclasscomponent";

export default function Home() {
  let collegeDetails = {
    name: "George Brown College",
    location: "Toronto, Canada",
    established: 1967
  };
  return (
    <div>
       <h1>ReactJS Application using Next.js</h1>
       <Student />
       <College collegeDetails={collegeDetails} />
        <Counter />
        <CounterClassComponent />
    </div>
  );
}