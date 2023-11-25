import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>Error 503</h1>
            <div>
                <figure>
                    <Image src="https://http.dog/503.jpg" alt="Gato" width={750} height={600}/>
                </figure>
            </div>
        <h2>Proibido!</h2>
    </div>
  )
}