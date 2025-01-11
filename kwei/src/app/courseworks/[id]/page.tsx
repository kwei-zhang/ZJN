async function getCourse(id: string) {
    const res = await fetch(`http://localhost:3000/api/courseworks/${id}`);
    const data = await res.json();
    return data;
}

export default async function CourseworkPage(props: {
    params: Promise<{ id: string }>;
  }) {

    const params = await props.params;
    const id = params.id;


    const course = await getCourse(id);

    console.log(course);
    return (
        <div>
            <h1>Coursework Page</h1>
        </div>
    )
}