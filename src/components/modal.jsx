export default function Modal(props) {
    console.log(props)
    return (
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none max-w-6xl max-h-screen" id="display-modal">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current max-h-full">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body relative p-4">
        {props.image ? <img src={props.image.image}></img> : null}
        <h2 class="text-3xl font-medium leading-normal text-white-800" id="exampleModalLabel">{props.image.title}</h2>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md ">
        <button type="button" class="px-6
          py-2.5
          bg-black
          border-white
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-gray-400 hover:shadow-lg hover:border-white
          focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-white-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}