import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function Profile({ name, bio, avatarUrl }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-14px_rgba(150,90,50,0.35),0_2px_6px_rgba(150,90,50,0.08)] ring-1 ring-white/80">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className="size-24 rounded-full object-cover sm:size-28"
        />
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
