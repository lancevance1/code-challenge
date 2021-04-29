<?php

namespace App\Repositories\Interfaces;

interface UserRepositoryInterface
{
   public function index();

   public function store($request);

   public function show($user);

   public function update($request, $user);

   public function destroy($user);
}