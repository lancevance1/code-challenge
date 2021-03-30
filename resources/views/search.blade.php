

@extends('layouts.app')
@section('title', 'Search')

@section('content')

        <div class="flex-center position-ref full-height">
                    <div id="app">
                    <search-component :token="'{{$user->api_token}}'"></search-component>
                    </div>
        </div>
@endsection

{{--    </body>--}}
{{--</html>--}}
