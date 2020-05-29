package com.practiceapp;

import android.view.View;
import android.widget.Button;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class ButtonViewManager  extends SimpleViewManager<Button> implements View.OnClickListener {
    @NonNull
    @Override
    public String getName() {
        return "ButtonView";
    }

    @NonNull
    @Override
    protected Button createViewInstance(@NonNull ThemedReactContext reactContext) {
        Button button = new Button(reactContext);
        button.setOnClickListener(this);
        return button;
    }

    @Override
    public void onClick(View v) {
        WritableMap map = Arguments.createMap();
        ReactContext reactContext = (ReactContext) v.getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(v.getId(), "topChange", map);
    }

    @ReactProp(name = "buttonText")
    public void setButtonText(Button button, String buttonText) {
        button.setText(buttonText);
    }

}
