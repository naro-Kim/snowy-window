'use client';
import { insertData, supabase } from "@/api/client";
import { useSceneContext } from "@/context/SceneContext";
import Link from "next/link";
import { useCallback, useRef, } from "react";

export const GuideMessage = () => {
  const { zoom, setZoom } = useSceneContext() as any;
  const handleBackButton = useCallback((e: any) => {
    e.stopPropagation();
    setZoom(false);
  }, []);

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    e.stopPropagation(); 
    try {
      insertData({ table: 'comments', name: e.target.name.value, content: e.target.content.value });
      setZoom(false);
    } catch (error) {
      console.log('Error occurred', { error })
    }
  }, []);

  return (
    <>
      <dialog open={zoom} className={`w-full sm:w-1/2 max-w-7xl rounded-xl bg-[rgba(0,0,0,0.5)] z-10 absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 duration-500`}>
        <div className={"text-white p-4 sm:p-8 grid grid-flow-rows gap-2"}>
          <div className="grid grid-flow-col mb-2">
            <h1 className={"font-semibold text-md sm:text-lg"}>Leave a Comment!</h1>
            <button className="justify-self-end text-xs max-w-[160px] bg-gray-500/25 p-2 rounded-lg"><Link href={`https://github.com/naro-Kim/snowy-window`}>개발 깃허브 바로가기</Link></button>
          </div>
          <span className={"font-light leading-relaxed text-pretty text-xs sm:text-sm"}>
            {/* <p>Share your thoughts about this project. Click "Submit" when you're done or "Cancel" to close the dialog.</p> */}
            <p>반가워요! 새해를 맞이하는 마음으로, 일주일 간 개발한 react-three-fiber 프로젝트입니다. 프로젝트를 응원하는 메세지를 남겨주시면 큰 힘이 됩니다!</p>
          </span>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-md" htmlFor="name">
                Name
              </label>
              <input autoFocus required id="name" name="name" className="rounded-lg p-2 bg-[rgba(0,0,0,0.2)] col-span-3" placeholder="Enter your name" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right text-md" htmlFor="message">
                Comment
              </label>
              <textarea required id="content" name="content" className="rounded-lg p-2 bg-[rgba(0,0,0,0.2)] col-span-3 min-h-[100px]" placeholder="Type your comment here" />
            </div>
            <div className="text-xs sm:text-sm grid grid-flow-col justify-self-end w-1/2 gap-2">
              <button type="submit" className={'rounded-lg bg-blue-500 py-2 px-4'}>Submit Comment</button>
              <button onPointerUp={handleBackButton} className={'text-gray-400/50 rounded-lg border-2 px-4 py-2 border-gray-400/50'} onClick={undefined}>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
};