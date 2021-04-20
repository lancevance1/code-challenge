<?php

namespace App\Repositories\Interfaces;

interface MediaRepositoryInterface
{
   public function index();

   public function store($request);

   public function show($media);

   public function update($request, $media);

   public function destroy($media);
}