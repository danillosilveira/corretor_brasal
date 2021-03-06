package com.vendas;
//package com.vendas;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.vonovak.AddCalendarEventPackage;
import com.rnfs.RNFSPackage;
import com.vinzscam.reactnativefileviewer.RNFileViewerPackage;
import com.RNFetchBlob.RNFetchBlobPackage;

import cl.json.RNSharePackage;
import cl.json.ShareApplication;

import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, ShareApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new SvgPackage(),
                    new AddCalendarEventPackage(),
                    new RNFSPackage(),
                    new RNFileViewerPackage(),
                    new RNFetchBlobPackage(),
                    new RNSharePackage(),
                    new VectorIconsPackage()
                    );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }

    @Override
    public String getFileProviderAuthority() {
        return "br.com.brasal.appvendas.provider";
    }
}
