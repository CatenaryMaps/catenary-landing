import { Badge } from '@/components/ui/badge'
import { maintainers } from '@/data/maintainers'
import Image from 'next/image'

export default function MaintainersList() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Meet our team!</h2>
                        {/*We might be humans too?*/}
                        <p className="md:text-xl text-muted-foreground">
                            The Catenary team is a diverse group of students working to make transit
                            easier for everyone.
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks
                    >
                        {maintainers.map((person, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-anchor="[data-aos-id-blocks]"
                            >
                                <a href={person.link} target="_blank">
                                    <Image
                                        src={person.src}
                                        alt="Profile picture"
                                        width={80}
                                        height={80}
                                        className="mb-4 rounded-full border border-border"
                                        unoptimized
                                    />
                                </a>
                                <a href={person.link} target="_blank">
                                    <span className="h4">{person.name}</span>
                                </a>
                                <span className="ml-1 text-muted-foreground text-xs">
                                    {person.pronouns}
                                </span>
                                {person.title && <span className={`font-black text-center m-[1px] ${
                                                person.title.startsWith('Board') ? 'text-yellow-500' : ''
                                            } ${
                                                person.title == 'Executive Director'
                                                    ? 'text-red-500 dark:text-red-300'
                                                    : ''
                                            }`}>{person.title}</span>}
                                <span className="text-center mb-2">{person.school}</span>
                                <span className="mb-2 flex flex-wrap items-center justify-center">
                                    {person.titles.map((role, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className='!font-normal m-[1px]'
                                        >
                                            {role}
                                        </Badge>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
