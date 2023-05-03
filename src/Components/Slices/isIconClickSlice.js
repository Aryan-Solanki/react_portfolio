import {createSlice} from "@reduxjs/toolkit";



const initialState={
    isIconClick:false,
    isIconLeftClicked:false,
    whichIconClick:"None",
    whichIconLeftClick:"None",
    isSideBarOpen:false,
};

export const isIconClickSlice = createSlice({
    name:"isIconClick",
    initialState,
    reducers:{

        iconClicked:(state,action)=>{
            state.isIconClick=true;
            state.whichIconClick=action.payload;
        },
        
        iconNotClicked:(state)=>{
            state.isIconClick=false;
        },

        iconLeftClicked:(state,action)=>{
            state.isIconLeftClicked=true;
            state.whichIconLeftClick=action.payload;
        },

        iconNotLeftClicked:(state)=>{
            state.isIconLeftClicked=false;
        },

        openSideBarr:(state)=>{
            state.isSideBarOpen=true;
        },

        closeSideBarr:(state)=>{
            state.isSideBarOpen=false;
        }

        
    }

})

export const {iconClicked,iconNotClicked,iconLeftClicked,iconNotLeftClicked,openSideBarr,closeSideBarr}=isIconClickSlice.actions;

export default isIconClickSlice.reducer;