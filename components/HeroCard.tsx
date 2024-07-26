import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const HeroCard=()=>{
    return(
        <><NeonGradientCard className="max-w-sm md:max-w-md lg:max-w-2xl items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
Hey there! Welcome to my portfolio. I'm a passionate developer who loves to tinker with technology and create innovative solutions.</span>
    </NeonGradientCard>

        </>)
}
export default HeroCard;
