
export interface IApps {
    title: string,
    icon: string,
    path: string
}

export const Apps: IApps[] = [
    { title: 'Users', icon: 'group', path: 'http://localhost:4202' },
    { title: 'GitHub Search', icon: 'person_search', path: 'http://localhost:4203' },
]