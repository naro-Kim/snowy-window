'use client';
import { useSceneContext } from "@/context/SceneContext";
import { useCallback } from "react";

export const Message = () => {
  const { zoom, setZoom } = useSceneContext() as any;
  const handlePointerUp = useCallback((e: any) => {
    e.stopPropagation();
    setZoom(false);
  }, []);

  return (
    <div className={`w-full sm:w-1/2 max-w-7xl rounded-xl bg-[rgba(0,0,0,0.5)] z-10 absolute bottom-40 left-1/2 -translate-x-1/2 translate-y-1/2 duration-400 ${zoom ? "opacity-100" : "opacity-0"} ${zoom ? "inline" : "hidden"}`}>
      <div className="p-4 sm:p-8 grid grid-flow-rows gap-2 text-center">
        <h1 className="font-semibold text-md sm:text-lg">조금 큰 선물 상자를 발견했습니다!</h1>
        <span className="font-light leading-relaxed text-pretty text-sm sm:text-md">
          <p>선물 상자의 리본에 글귀가 남아있어요.</p>
          <p>여러분의 소중한 이야기를 남겨주세요.</p>
          <p>선물 상자에 담아 맵에 남겨둘게요.</p>
        </span>
        <div className="mt-4 text-sm grid grid-flow-rows gap-2">
          <button className="py-2 rounded-lg bg-blue-400">선물 남기기</button>
          <button className="border-[0.5px] rounded-lg font-light
           border-white py-2 opacity-50" onPointerUp={handlePointerUp}>돌아가기</button>
        </div>
      </div>
    </div >
  )
};
