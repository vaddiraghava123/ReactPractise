import Person from "./Person";
function NameList() {

    //List
    const nameList =['Raghava','Oorvin','Thulasi','Raghava']
    const names = nameList.map((name,index) => <h3 key={index} index={index} >{name}- {index}</h3>)
    

    const personList = [
        {
            id: 1,   
            name: 'PersonRagh',
            age:41,
            skill:'Java'
        },
        {
            id: 2,
            name: 'PersonOorvin',
            age:41,
            skill:'High'
        }, {
            id: 3,
            name: 'PersonThulasi',
            age:41,
            skill:'JavaHigh'
        }
    ]

    const persons = personList.map(person => <Person key={person.id} person={person}/>)
                return ( 
            <div>{names} {persons}</div>         
            )
   
}

export default NameList