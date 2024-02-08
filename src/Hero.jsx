export default function Hero(){
    return(
    <div className="hero min-h-screen bg-[url('https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg')]">
    <div className="hero-content flex-col lg:flex-row">
        <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1707058593~exp=1707059193~hmac=ed3ad13ed7e2b70a600695ac63fad061a44986dc488642733a97f530ca6698c8" className="max-w-s rounded-lg shadow-2xl m-8" />
        <div>
        <h1 className="text-5xl font-bold text-gray-900">Hello folks !</h1>
        <p className="py-6 text-gray-800">my name is Jovis. I am 23 years old and have a hobby of playing games. I enjoy solving code puzzles and exploring the world of software development. My desire to continue learning, innovating and creating technology solutions that benefit many people is what push me in this field.</p>
        <button className="btn text-gray-50">let's explore</button>
        </div>
    </div>
    </div>
    )
}
