import AliceCarousel from "react-alice-carousel";

export const Carousel22 = ({text,items1}) => {

    const items = ["item1","item2","item3"]
    const responsive = {
        0: { items: 1 },
        768: { items: 2 },
        1197: { items: 3 },
      };

      const responsive1 = {
        0: { items: 3 },
        768: { items: 3 },
        1197: { items: 3 },
      };
    return (
      <div className="grid grid-cols-3 mt-55">
        <div className="col-span-2">  
          {text}
        </div>
        <div className="col-span-3 px-10">
          <AliceCarousel
           mouseTracking={false}
           
            // disableButtonsControls  // ---> also remove this
            // activeIndex={activeIndex}  // ---> no need to this anymore
            items={items1}
            responsive={responsive}
            controlsStrategy="responsive"

            infinite={true}
            keyboardNavigation={true}
            renderPrevButton={() => {
              return <p className="p-4 left_ absolute left-0 top-0"><svg viewBox="0 0 24 24" fill="none" width='40px' pp="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path> </g></svg></p>
            }}dashed
            renderNextButton={() => {
              return <p onClick={console.log('dfsdfsdf')} className="p-4 right_ absolute right-0 top-0"><svg viewBox="0 0 24 24" fill="none"width='40px'pp="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"></path> </g></svg></p>
            }}
          />


<AliceCarousel
           mouseTracking={false}
           
            // disableButtonsControls  // ---> also remove this
            // activeIndex={activeIndex}  // ---> no need to this anymore
            items={items1}
            responsive={responsive}
            controlsStrategy="responsive"

            infinite={true}
            keyboardNavigation={true}
            renderPrevButton={() => {
              return <p className="p-4 left_ absolute left-0 top-0"><svg viewBox="0 0 24 24" fill="none" width='40px' pp="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path> </g></svg></p>
            }}dashed
            renderNextButton={() => {
              return <p className="p-4 right_ absolute right-0 top-0"><svg viewBox="0 0 24 24" fill="none"width='40px'pp="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F"></path> </g></svg></p>
            }}
          />

        </div>
      </div>
      )
  }
