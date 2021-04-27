function r(text, reading)
{
    return ctx => !ctx.named("reading") ? text : reading;
}

export const messages =
{
    ja:
    {
        default_user_name: "名無しさん",
        message_colon: "：",
        test: "テスト",
        ui:
        {
            title: "ギコっぽいぽい",
            subtitle: "非公式リメイク",
            
            login_user_count: "人数：",
            login_streamer_count: "配信者：",
            
            infobox_label_area: "ｴﾘｱ：",
            infobox_value_area: "海辺の町",
            infobox_label_room: "ｽﾃｰｼﾞ：",
            infobox_label_user_name: "名前：",
            infobox_label_user_count: "人数：",
            infobox_label_stream_count: "配信者：",
            
            label_username: "ユーザー名：",
            label_stream: "ﾁｬﾝﾈﾙ{index}：",
            label_input: "入力：",
            label_log: "ログ：",

            button_switch_language: "English",
            button_send: "発言",
            button_stream_start: "配信開始",
            button_stream_stop: "配信停止",
            button_stream_take: "受信",
            button_stream_drop: "受信停止",
            button_rula: "#ﾙｰﾗ",
            button_list: "#ﾘｽﾄ",
            button_preferences: "設定",
            button_logout: "ログアウト",
            volume: "音量：",
            sound_effect: "効果音",
            tts_volume: "TTS音量",
            label_move: "移動",
            label_bubble: "吹き出し",
            
            popup_button_ok: "OK",
            popup_button_cancel: "キャンセル",
            
            warning_toast_title: "警告",
            
            rula_menu_title: "ステージ情報",
            rula_menu_column_room_name: "ステージ名",
            rula_menu_column_user_count: "人数",
            rula_menu_column_streamers: "配信者",
            rula_menu_button_rula: "ルーラ",

            user_list_popup_title: "ユーザーリスト",
            user_list_popup_column_user_name: "ユーザー名",
            user_list_popup_ignore: "一方あぼーん",
            user_list_popup_unignore: "一方あぼーん解除",
            user_list_popup_block: "相互あぼーん",
            user_list_popup_close: "閉じる",
            user_list_popup_blurb: "注意：一方あぼーんしても相手からは見えます。<br>相互あぼーんをすると、相手が再接続してもあぼーんが解除されません。",
            
            stream_form_title: "配信設定",
            stream_form_mode: "モード：",
            stream_form_video_sound_mode: "動画＋音声",
            stream_form_sound_only_mode: "音声のみ",
            stream_form_video_only_mode: "動画のみ",
            stream_form_show_advanced: "高度な設定を表示",
            stream_form_hide_advanced: "高度な設定を非表示",
            stream_form_echo_cancellation: "エコーキャンセラー",
            stream_form_noise_suppression: "ノイズ除去",
            stream_form_auto_gain: "オートゲイン",
            stream_form_button_stream: "配信開始",
            stream_form_screen_capture: "画面共有",
            stream_form_screen_capture_audio: "画面の音声を共有",
            stream_form_screen_capture_audio_notice: "この機能は実験中です。ChromeとEdgeでのみ有効です。\nWindowsでは、画面の音声とタブの音声しか取得できません。",
            
            preferences_title: "設定",
            preferences_name_bg: "名前の背景を表示",
            preferences_shift_enter: "Shift+Enterで改行",
            preferences_bubble_opacity: "吹き出しの不透明度",
            preferences_dark_mode: "Shaddoxモード",
            preferences_command_section_visible: "呪文ボタンを表示",
            preferences_move_section_visible: "移動ボタンを表示",
            preferences_bubble_section_visible: "吹き出しボタンを表示",
            preferences_logout_button_visible: "ログアウトボタンを表示",
            preferences_show_notifications: "デスクトップ通知を表示",
            preferences_enable_text_to_speech: "有効",
            preferences_tts_voice: "音声",
            notifications_are_denied: "現在このサイトは通知を表示することが許可されていません。\nブラウザの権限を確認してください。",
            preferences_title_general: "一般",
            preferences_title_game: "ゲーム",
            preferences_title_toolbar: "ツールバー",
            preferences_title_tts: "読み上げ（TTS）",
            preferences_title_notifications: "通知",
            preferences_message_sound_enabled: "メッセージ音声",
            preferences_login_sound_enabled: "ログイン音声",
            preferences_name_mention_sound_enabled: "名前音声通知",
            preferences_custom_mention_sound_pattern: "カスタム音声通知パターン",
            preferences_custom_mention_sound_notice: "カンマ区切りの単語または正規表現。\n単語を含む、または正規表現に一致するメッセージは、音声通知が出ます。",
            preferences_underlined_usernames: "ログの名前にアンダーラインを付ける",
            preferences_low_quality: "低画質",
            preferences_crisp_mode: "シャープ",

            back_to_homepage: "トップへ戻る",
        },
        msg:
        {
            no_other_users_in_this_room: "この部屋には他のユーザーがいません！",
            connection_lost: "再接続中",
            connection_refused: "接続が失われました。ページを再読み込みしてください。",
            page_refresh_required: "サーバーが更新されたので、ページを再読み込みしてください。",
            
            error_obtaining_media: "メディアを取得できませんでした。",
            error_obtaining_video: "動画を取得できませんでした。",
            error_obtaining_audio: "音声を取得できませんでした。",
            no_webrtc: "このブラウザはWebRTCをサポートしていません。",

            unknown_error: "不明なエラーで接続に失敗しました。",
            invalid_username: "指定されたユーザー名は無効です。",
            ip_restricted: "これ以上同時にログインできません。",
            start_stream_stream_slot_already_taken: "他の誰かがすでにこのぱねで配信しています。",
            start_stream_stream_slot_already_taken_by_blocked_streamer: "あぼーんされている誰かがすでにこのぱねで配信しています。",
            start_stream_stream_slot_already_taken_by_blocking_streamer: "あなたをあぼーんしている誰かがすでにこのぱねで配信しています。",
            start_stream_unknown_error: "配信を開始できませんでした。",
            are_you_sure_you_want_to_logout: "本当にログアウトしますか？",
            are_you_sure_you_want_to_block: "子のユーザーを相互あぼーんしますか？",
            goodbye: "　またね！",
            flood_warning: "おい、早口すぎるじゃないか！",
        },
        room:
        {
            jinja: r("神社", "じんじゃ"),
            jinja_st: r("神社入り口", "じんじゃいりぐち"),
            long_st: r("鰻道", "うなぎみち"),
            school_ground: r("学校 校庭", "がっこう こうてい"),
            bar774: r("地下街 バー774", "ちかがい バー774"),
            izakaya774: r("地下街 居酒屋 名無し", "ちかがい いざかや ななし"),
            basement: r("地下街", "ちかがい"),
            bar: "バー",
            school_st: r("学校通り", "がっこうどおり"),
            bar_st: r("バー通り", "バーどおり"),
            admin_st: r("開発局通り", "かいはつきょくどおり"),
            cafe_st: r("カフェ通り", "カフェどおり"),
            busstop: r("バス停", "バスてい"),
            idoA: r("井戸Ａ", "いどＡ"),
            idoB: r("井戸Ｂ", "いどＢ"),
            school: r("学校 教室", "がっこう きょうしつ"),
            admin: r("開発局", "かいはつきょく"),
            seashore: r("海岸", "かいがん"),
            admin_bar: r("秘密のバー", "ひみつのバー"),
            radio: r("ラヂヲ局", "ラヂヲきょく"),
            radio_room1: r("ラヂヲ局 第1スタジオ", "ラヂヲきょく だい1スタジオ"),
            yatai: r("屋台", "やたい"),
            kaidan: r("高台の階段", "たかだいのかいだん"),
            takadai: r("高台", "たかだい"),
            yoshinoya: r("吉野家", "よしのや"),
            radio_gakuya: r("ラヂヲ局 楽屋", "ラヂヲきょく がくや"),
            radio_backstage: r("ラヂヲ局 舞台裏", "ラヂヲきょく ぶたいうら"),
            radio_room2: r("ラヂヲ局 第2スタジオ BEAT GIKO", "ラヂヲきょく だい2スタジオ BEAT GIKO"),
            radio_room3: r("ラヂヲ局 第3スタジオ G-SQUID", "ラヂヲきょく だい2スタジオ G-SQUID"),
            school_rouka: r("学校 廊下", "がっこう ろうか"),
            school_international: r("学校 国際科教室", "がっこう こくさいかきょうしつ"),
            school_pc: r("学校 パソコンルーム", "がっこう パソコンルーム"),
            enkai: r("宴会場", "えんかいじょう"),
            silo: "サイロ",
            badend: r("転落死しました！", "てんらくししました！"),
            bar_giko: r("ＢＡＲギコ", "バーギコ"),
            bar_giko2: r("ＢＡＲギコ 下階", "バーギコ かかい"),
            bar_giko_square: r("噴水広場", "ふんすいひろば"),
            densha: r("電車", "でんしゃ"),
        }
    },
    en:
    {
        default_user_name: "Anonymous",
        message_colon: ": ",
        test: "test",
        ui:
        {
            title: "Gikopoipoi",
            subtitle: "Unofficial remake",
            
            login_user_count: "Users: ",
            login_streamer_count: "Streamers: ",
            
            infobox_label_area: "Area:",
            infobox_value_area: "Sea City",
            infobox_label_room: "Stage:",
            infobox_label_user_name: "Name:",
            infobox_label_user_count: "Users:",
            infobox_label_stream_count: "Streams:",
            
            label_username: "User name:",
            label_stream: "Channel {index}: ",
            label_input: "Input:",
            label_log: "Log:",

            button_switch_language: "日本語",
            button_send: "Send",
            button_stream_start: "Start stream",
            button_stream_stop: "Stop stream",
            button_stream_take: "Get stream",
            button_stream_drop: "Drop stream",
            button_rula: "#rula",
            button_list: "#list",
            button_preferences: "Preferences",
            button_logout: "Logout",
            volume: "Volume: ",
            sound_effect: "Volume",
            tts_volume: "TTS Vol.",
            label_move: "Move",
            label_bubble: "Bubble",
            
            popup_button_ok: "OK",
            popup_button_cancel: "Cancel",
            
            warning_toast_title: "Warning",
            
            rula_menu_title: "Stage Info",
            rula_menu_column_room_name: "Stage Name",
            rula_menu_column_user_count: "Users",
            rula_menu_column_streamers: "Streamers",
            rula_menu_button_rula: "Rula",

            user_list_popup_title: "User List",
            user_list_popup_column_user_name: "User name",
            user_list_popup_ignore: "Ignore",
            user_list_popup_unignore: "Unignore",
            user_list_popup_block: "Block",
            user_list_popup_close: "Close",
            user_list_popup_blurb: "Warning: When you ignore a user, you will not see them, but they will still see you.<br>When you block a user, he'll stay blocked even if he reconnects.",
            
            stream_form_title: "Stream Settings",
            stream_form_mode: "Mode:",
            stream_form_video_sound_mode: "Video + Voice",
            stream_form_sound_only_mode: "Voice only",
            stream_form_video_only_mode: "Video only",
            stream_form_show_advanced: "Show Advanced Settings",
            stream_form_hide_advanced: "Hide Advanced Settings",
            stream_form_echo_cancellation: "Echo Cancellation",
            stream_form_noise_suppression: "Noise Reduction",
            stream_form_auto_gain: "Auto Gain Control",
            stream_form_button_stream: "Start Streaming",
            stream_form_screen_capture: "Screen Capture",
            stream_form_screen_capture_audio: "Screen Capture Audio",
            stream_form_screen_capture_audio_notice: "This feature is experimental. Chrome and Edge only. \nOn Windows, only the screen audio or tab audio can be captured.",
            
            preferences_title: "Preferences",
            preferences_name_bg: "Show Username Background",
            preferences_shift_enter: "Newline On Shift+Enter",
            preferences_bubble_opacity: "Speech Bubble Opacity",
            preferences_dark_mode: "Shaddox Mode",
            preferences_command_section_visible: "Display Command Buttons",
            preferences_move_section_visible: "Display Move Buttons",
            preferences_bubble_section_visible: "Display Bubble Buttons",
            preferences_logout_button_visible: "Display Logout Button",
            preferences_show_notifications: "Show Desktop Notifications",
            preferences_enable_text_to_speech: "Enable",
            preferences_tts_voice: "Voice",
            notifications_are_denied: "This site is currently not permitted to show notifications.\nPlease check your browser's permissions.",
            preferences_title_general: "General",
            preferences_title_game: "Game",
            preferences_title_toolbar: "Toolbar",
            preferences_title_tts: "Text-to-Speech",
            preferences_title_notifications: "Notifications",
            preferences_message_sound_enabled: "Message Sound",
            preferences_login_sound_enabled: "Login Sound",
            preferences_name_mention_sound_enabled: "Username Mention Sound",
            preferences_custom_mention_sound_pattern: "Custom Mention Sound Pattern",
            preferences_custom_mention_sound_notice: "Comma separated words or Regex.\nMessages that include the words or match the Regex trigger the mention sound.",
            preferences_underlined_usernames: "Underline Usernames",
            preferences_low_quality: "Low Quality",
            preferences_crisp_mode: "Crisp",
            

            back_to_homepage: "Go back to home page",
        },
        msg:
        {
            no_other_users_in_this_room: "There are no other users in this room!",
            connection_lost: "Reconnecting...",
            connection_refused: "Connection Lost, please refresh the page.",
            page_refresh_required: "An update is ready, so please refresh this page.",
            
            error_obtaining_media: "Unable to obtain media.",
            error_obtaining_video: "Unable to obtain video.",
            error_obtaining_audio: "Unable to obtain audio.",
            no_webrtc: "Sorry, your browser doesn't support WebRTC.",
            
            unknown_error: "The connection failed due to an unknown error.",
            invalid_username: "The provided username is invalid.",
            ip_restricted: "You are already logged in twice with this IP address.",
            start_stream_stream_slot_already_taken: "Someone else is already streaming in this slot.",
            start_stream_stream_slot_already_taken_by_blocked_streamer: "Someone who you are blocking is already streaming in this slot.",
            start_stream_stream_slot_already_taken_by_blocking_streamer: "Someone who has blocked you is already streaming in this slot.",
            start_stream_unknown_error: "Unable to start streaming.",
            are_you_sure_you_want_to_logout: "Are you sure you want to logout?",
            are_you_sure_you_want_to_block: "Are you sure you want to block this user?",
            goodbye: "See you soon!",
            flood_warning: "Hey, aren't you talking a bit too fast?",
        },
        room:
        {
            long_st: "Eel Track",
            jinja: "Shrine",
            jinja_st: "Shrine Entrance",
            school_ground: "School: Schoolyard",
            bar774: "Underground Town: Bar 774",
            izakaya774: "Underground Town: Drunker's Bar",
            basement: "Underground Town",
            bar: "Bar",
            school_st: "School Crossing",
            bar_st: "Bar Street",
            admin_st: "Kanrinin Street",
            admin: "Developer's Lounge",
            admin_bar: "Admin's Bar",
            cafe_st: "Cafe Vista",
            enkai: "Banqueting Hall",
            idoA: "Well A",
            idoB: "Well B",
            busstop: "Bus Stop",
            school: "School: Classroom",
            school_rouka: "School: Hallway",
            school_international: "School: Cultural Room",
            school_pc: "School Computer Lab",
            seashore: "Seashore",
            radio: "Radio Studio",
            radio_room1: "Radio Studio 1",
            radio_room2: "Radio Studio 2: BEAT GIKO",
            radio_room3: "Radio Studio 3: G-SQUID",
            radio_gakuya: "Radio Studio: Dressing Room",
            radio_backstage: "Radio Studio: Greenroom",
            yatai: "Sushi Vendor",
            kaidan: "Hilltop Stairway",
            takadai: "Hilltop",
            yoshinoya: "Yoshinoya",
            silo: "Silo",
            badend: "You fell to your death!",
            bar_giko: "Bar Giko",
            bar_giko2: "Bar Giko Lower Floor",
            bar_giko_square: "Fountain Plaza",
            densha: "Train",
        }
    }
}