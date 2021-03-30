
@extends('layouts.app')
@section('title', 'Home')

@section('content')

        <div class="flex-center position-ref full-height">

                    <div id="app">
                        <media-component :token="'{{$user->api_token}}'"></media-component>

                    </div>

        </div>
@endsection


