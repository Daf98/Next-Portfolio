interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string
}

interface Image {
    _type: image,
    asset: {
        _ref: string,
        _type: reference
    }
}
export interface Social extends SanityBody {
    _type: social,
    title: string,
    url: string
}

export interface pageInfo extends SanityBody {
    _type: pageInfo,
    backgroundInformation: string,
    email: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    role: string
}

export interface Technology extends SanityBody {
    _type: skill,
    title: string,
    image: Image,
}

export interface Skill extends SanityBody {
    _type: skill,
    title: string,
    image: Image,
}

export interface Project extends SanityBody {
    title:string,
    _type: project,
    heroImage: Image,
    linkToBuild:string,
    summary:string,
    technologies: Technology[]
}