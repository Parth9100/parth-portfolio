export interface ProjectImage {
    src: string;
    label: string;
    type: 'render' | 'wireframe';
}

export interface Project {
    title: string;
    description: string;
    category: string;
    tools: string[];
    featured: boolean;
    githubUrl: string;
    videoId: string;
    videoType?: 'regular' | 'shorts';
    embedUrl?: string;
    images: ProjectImage[];
}

export const PROJECTS: Project[] = [
    {
        title: "High-Fidelity Headphones",
        description: "Designed and modeled a highly detailed pair of studio headphones from scratch, focusing on technical precision and visual realism.",
        category: "Hard Surface Modeling",
        tools: ["Blender", "Cycles", "PBR Materials", "UV Mapping", "Retopology"],
        featured: true,
        githubUrl: "https://github.com/Parth9100/-Headphone-Product-Animation-Blender",
        videoId: "0XA_SSn_H1k",
        images: [
            { src: "/Headphone.png", label: "Hero Render", type: "render" },
            { src: "/Headphone2.png", label: "Dramatic Lighting", type: "render" },
            { src: "/HeadphoneWireFrameFront.png", label: "Wireframe Front", type: "wireframe" },
            { src: "/HeadphoneWireFrameSide.png", label: "Wireframe Side", type: "wireframe" },
            { src: "/HeadphoneWireFrameTop.png", label: "Wireframe Top", type: "wireframe" }
        ]
    },
    {
        title: "Coffee Pour Animation",
        description: "Conceptualized and executed a full product animation sequence for a 3D coffee bottle, combining fluid simulation, shader development, and cinematic camera work.",
        category: "Motion Design",
        tools: ["Blender", "Fluid Simulation", "UV Unwrapping", "Texturing"],
        featured: true,
        githubUrl: "https://github.com/Parth9100/Blender_Bottle_and_Fluid-_Animation",
        videoId: "qbfXzwxEjDo",
        videoType: "shorts",
        embedUrl: "https://www.youtube.com/embed/qbfXzwxEjDo",
        images: [
            { src: "/BottleRender.png", label: "Product Render", type: "render" }
        ]
    }
];
