export const Modal = ({ children, show, text, close, showCloseIcon }) => {
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl drop-shadow-[0_35px_35px_rgba(255,255,255,0.20)]">
              <div className="bg-white/75 border border-black p-4 w-96">
                <div className="flex justify-between items-center">
                  <div className="space-y-2 text-sm ml-4">{text}</div>
                  {showCloseIcon && (
                    <div className="text-sm mr-4" onClick={close}>
                      X
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">{children}</div>
              </div>
            </div>
          </div>
          <div className="opacity-50 blur-md  fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
