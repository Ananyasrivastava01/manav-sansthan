const people = [
    {
        name: 'Sanjeev Gupta',
        role: 'Co-Founder',
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFx28Mr4QL5Y9YbDEQW94myfF75u-EV6vpA&s',
    },
    {
        name: 'Jagdish Jain',
        role: 'Co-Founder',
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFx28Mr4QL5Y9YbDEQW94myfF75u-EV6vpA&s',
    },
    {
        name: 'Mukesh Sharma',
        role: 'Marketing Director',
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFx28Mr4QL5Y9YbDEQW94myfF75u-EV6vpA&s',
    },
    {
        name: 'Reena Aggarwal',
        role: 'Head of Community Engagement',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Pawan Jain',
        role: 'Chief Financial Officer',
        imageUrl:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ramesh Goel',
        role: 'Operations Manager',
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFx28Mr4QL5Y9YbDEQW94myfF75u-EV6vpA&s',
    },
]

export default function OurTeam() {
    return (
        <div className="py-24 sm:py-32 border-t border-white">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl" data-aos="fade-right">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our dedicated team works tirelessly to ensure that we make a positive impact in the communities we serve. Together, we strive to bring about meaningful change.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" data-aos="fade-left">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
