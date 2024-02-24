import type { BlogPost } from "../types";

export default defineEventHandler((event) => {
    const blogs: BlogPost[] = [
        {
            id: "story_of_sketchware",
            title: "From Dream to Code: The Story of Sketchware",
            description:
                "The story of how a high school student built a no-code app builder that has been used by millions of people around the world.",
            author: "Pranav Purwar",
            date: "February 23, 2024",
        },
        {
            id: "sketchware_pro",
            title: "About Sketchware Pro",
            description:
                "Sketchware Pro is a more advanced version of Sketchware that allows you to build even more powerful apps.",
            author: "Pranav Purwar",
            date: "February 24, 2024",
        }
    ];

    const response = new Response(JSON.stringify(blogs), {
        headers: {
            "Content-Type": "application/json",
        },
    });

    event.respondWith(response);
});
