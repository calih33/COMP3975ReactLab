import { ReactNode } from "react";

interface AboutMeProps {
    name?: string;
    bio?: string;
    children?: ReactNode;
}

const AboutMe = ({ name = "User", bio = "No bio provided.", children }: AboutMeProps) => {
    return (
        <section className="about-me-container">
            <h1>About {name}</h1>
            <p>{bio}</p>
            <div className="extra-content">
                {children}
            </div>
        </section>
    );
};

export default AboutMe;