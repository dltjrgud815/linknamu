import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function Profile({ name, bio, avatarUrl }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={avatarUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="size-28 rounded-full border border-black/10 object-cover sm:size-32 dark:border-white/15"
      />
      <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="text-sm text-black/60 sm:text-base dark:text-white/60">{bio}</p>
    </header>
  );
}
